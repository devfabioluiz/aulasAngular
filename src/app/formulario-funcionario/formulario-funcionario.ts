import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Funcionarios } from '../services/funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-funcionario',
  standalone: true,
  templateUrl: './formulario-funcionario.html',
  styleUrl: './formulario-funcionario.css',
  imports: [ReactiveFormsModule],
})
export class FormularioFuncionario {
  constructor(private funcionarios: Funcionarios, private router: Router) {}
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
    optouVT: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataDemissao: new FormControl(null),
  });

  enviar() {
    this.funcionarios.postFuncionarios(this.funcionarioForm.value).subscribe({
      next: (data) => {
        console.log('Funcionario salvo:', data);
        // Redireciona **só depois que o backend confirma**
        this.router.navigate(['/lista']);
      },
      error: (err) => {
        console.error('Erro ao salvar funcionario', err);
      },
    });
  }
}
