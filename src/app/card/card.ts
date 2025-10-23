import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Funcionarios } from '../services/funcionarios';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {

  constructor(private funcionarios: Funcionarios, private snackBar: MatSnackBar, private router: Router){}

  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() sobrenome: string = '';
  @Input() salarioAtual: number = 0;
  @Input() endereco: string = '';
  @Input() optouVT: any;

  /*
  deletarFuncionario(usuarioId: string){
    this.funcionarios.deleteUserById(usuarioId).subscribe((data)=>{
      console.log(data)
    })
  }
    */

    /* ALERTA GENÉRICO
  deletarFuncionarios(usuarioId: string) {
    this.funcionarios.deleteUserById(usuarioId).subscribe({
      next: () => {
        alert('Funcionário deletado com sucesso!');
        window.location.reload();
      },
      error: () => {
        alert('Erro ao deletar funcionário.');
      },
    });
  }

}

*/ 
// SNACK BAR COM REDIRECIONAMENTO
  deletarFuncionarioSnack(usuarioId: string){ {
    this.funcionarios.deleteUserById(usuarioId).subscribe({
      next: () => {
        this.snackBar.open('Funcionário deletado com sucesso!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',

        });

        setTimeout(() => {
          this.router.navigate(['/lista']);
        }, 1000);

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
}