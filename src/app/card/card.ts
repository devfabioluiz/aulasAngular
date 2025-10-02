import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() sobrenome: string = '';
  @Input() salarioAtual: string = '';
  @Input() endereco: string = '';
}
