import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiDever {
  apiurl = 'https://node-vercel-app-rho.vercel.app/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiurl}/funcionarios`);
  }

  getAvisos() {
    return this.http.get(`${this.apiurl}/mural-avisos`);
  }

  postFuncionarios(funcionario: any) {
    return this.http.post(`${this.apiurl}/funcionarios`, funcionario);
  }

  postAvisos(argumento: any) {
    return this.http.post(`${this.apiurl}/mural-avisos`, argumento);
  }
}
