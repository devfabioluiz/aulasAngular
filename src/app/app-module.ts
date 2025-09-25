import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';
import { HttpClientModule } from '@angular/common/http';
import { DeverAulaApi } from './dever-aula-api/dever-aula-api';

import { ReactiveFormsModule } from '@angular/forms';
import { FormularioFuncionario } from './formulario-funcionario/formulario-funcionario';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Configuracoes } from './configuracoes/configuracoes';
import { Profile } from './profile/profile';
import { Detalhes } from './detalhes/detalhes';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    App,
    ListaFuncionario,
    DeverAulaApi,
    FormularioFuncionario,
    Admin,
    Login,
    Configuracoes,
    Profile,
    Detalhes,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, MatTableModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
