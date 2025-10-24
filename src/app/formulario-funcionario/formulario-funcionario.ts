import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Funcionarios } from '../services/funcionarios';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-funcionario',
  standalone: true,
  templateUrl: './formulario-funcionario.html',
  styleUrl: './formulario-funcionario.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class FormularioFuncionario {

  funcionarioForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    grauEscolaridade: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    valorPassagem: new FormControl('', Validators.required),
    optouVT: new FormControl(false),
    cargo: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataDemissao: new FormControl(null),
  });

  constructor(
    private funcionarios: Funcionarios, 
    private router: Router
  ) {}

  campoInvalido(campo: string) {
    const control = this.funcionarioForm.get(campo);
    return control && control.invalid;
  }

  enviar() {
    if (this.funcionarioForm.invalid) {
      return;
    }

    this.funcionarios.postFuncionarios(this.funcionarioForm.value)
      .subscribe((data: any) => {
        console.log('Funcionário cadastrado:', data);
        this.router.navigate(['/lista']);
      });
  }
}