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
  funcionariosLista: any[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario'];
  dataSource = this.funcionariosLista;

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarios.getUsers().subscribe((data: any) => {
      this.funcionariosLista = data;
      console.log(this.funcionariosLista);
      
    });
  }

  detalhesFuncionarios(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}
