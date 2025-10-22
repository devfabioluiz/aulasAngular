import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Funcionarios {
  private apiUrl = 'https://node-vercel-app-rho.vercel.app/api/funcionarios';

  constructor(private http: HttpClient) {}

  // BUSCA E RETORNA TODOS OS FUNCIONÁRIOS CADASTRADOS NA API/BANCO DE DADOS
  getUsers() {
    return this.http.get(this.apiUrl);
  }

  // BUSCA E RETORNA APENAS 1 FUNCIONÁRIO CADASTRADOS NA API/BANCO DE DADOS DE ACORDO COM O ID QUE VC PASSOU
  getUserById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // CADASTRA UM FUNCIONÁRIO NA API/BANCO DE DADOS
  postFuncionarios(formulario: any) {
    return this.http.post(this.apiUrl, formulario);
  }

  deleteUserById(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
