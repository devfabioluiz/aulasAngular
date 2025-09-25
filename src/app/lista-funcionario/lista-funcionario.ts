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
  constructor(private funcionarios: Funcionarios, private router: Router) {}
  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario'];
  dataSource = [];

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarios.getUsers().subscribe((data: any) => {
      this.dataSource = data;
      
    });
  }

  detalhesFuncionarios(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}
