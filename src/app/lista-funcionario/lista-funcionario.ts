import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../services/funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-funcionario',
  standalone: false,
  templateUrl: './lista-funcionario.html',
  styleUrl: './lista-funcionario.css',
})
export class ListaFuncionario implements OnInit {
  snackBar: any;
  constructor(private funcionarios: Funcionarios, private router: Router) {}
  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario', 'detalhes'];
  funcionariosLista = [];

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarios.getUsers().subscribe((data: any) => {
      console.log(data);
      this.funcionariosLista = data;
      console.log(data);
    });
  }

  detalhesFuncionarios(id: number) {
    this.router.navigate(['detalhes', id]);
  }

  adicionarFuncionario() {
    this.router.navigate(['cadastrar']);
  }

  cadastrarFuncionario() {
    this.router.navigate(['/cadastrar']);
  }

}
