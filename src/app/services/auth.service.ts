// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuario: any = null;

  login(nome: string, role: string) {
    this.usuario = { nome, role };
  }

  logout() {
    this.usuario = null;
  }

  estaLogado(): boolean {
    return !!this.usuario;
  }

  temRole(role: string): boolean {
    return this.usuario?.role === role;
  }
}
