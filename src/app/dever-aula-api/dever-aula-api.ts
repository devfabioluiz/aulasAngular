import { Component, OnInit } from '@angular/core';
import { ApiDever } from '../services/api-dever';

@Component({
  selector: 'app-dever-aula-api',
  standalone: false,
  templateUrl: './dever-aula-api.html',
  styleUrl: './dever-aula-api.css',
})
export class DeverAulaApi implements OnInit {
  constructor(private apiDever: ApiDever) {}

  apiDeverLista: any = [];

  funcionario = {
    nome: 'Thiago agora ta certo',
    sobrenome: 'Rodrigues',
    sexo: 'Masculino',
    dtNascimento: '2000-05-15',
    grauEscolaridade: 'Ensino Superior Completo',
    endereco: 'Rua das Flores, 123, Bloco A, Apto 101',
    foto: 'img/ana clara.png',
    salarioAtual: 3500.0,
    valorPassagem: 8.6,
    optouVT: true,
    historicoCargosESalarios: [
      {
        cargo: 'Desenvolvedora Jr.',
        salario: 3000,
        dataInicio: '2024-01-01',
        dataFim: '2025-01-01',
      },
    ],
  };

  ngOnInit(): void {
    this.getAvisos();
  }

  postAvisos() {
    return this.apiDever.postFuncionarios(this.funcionario).subscribe((dados) => console.log(dados));
  }

  getAvisos() {
    this.apiDever.getUsers().subscribe((dados) => {
      this.apiDeverLista = dados;
      console.log(this.apiDeverLista);
    });
  }
}
