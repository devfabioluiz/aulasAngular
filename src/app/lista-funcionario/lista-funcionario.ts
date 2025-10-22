import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../services/funcionarios';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  deletarFuncionario(id: number) {
    this.funcionarios.deleteUser(id).subscribe({
      next: () => {
        this.getFuncionarios();
        this.snackBar.open('Funcionário deletado com sucesso!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
      error: () => {
        this.snackBar.open('Erro ao deletar funcionário.', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    });
  }
}
