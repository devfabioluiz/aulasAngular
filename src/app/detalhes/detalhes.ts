import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionarios } from '../services/funcionarios';

@Component({
  selector: 'app-detalhes',
  standalone: false,
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class Detalhes {

constructor(
  private route: ActivatedRoute,
  private funcionarioService: Funcionarios
) {}
idUsuario: any = ''
usuario: any
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.idUsuario = params.get('id');
    this.getUserDetails(this.idUsuario)
  });
}

getUserDetails(id: string){
  return this.funcionarioService.getUserById(id)
    .subscribe((data: any) => {
      this.usuario = data
    });
  }
}
