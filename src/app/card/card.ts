import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Funcionarios } from '../services/funcionarios';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {

  constructor(private funcionarios: Funcionarios){}

  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() sobrenome: string = '';
  @Input() salarioAtual: number = 0;
  @Input() endereco: string = '';
  @Input() optouVT: any;

  deletarFuncionario(usuarioId: string){
    this.funcionarios.deleteUserById(usuarioId).subscribe((data)=>{
      console.log(data)
    })
  }

}
