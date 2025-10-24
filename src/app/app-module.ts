import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';
import { HttpClientModule } from '@angular/common/http';
import { DeverAulaApi } from './dever-aula-api/dever-aula-api';
import { Admin } from './admin/admin';
import { Configuracoes } from './configuracoes/configuracoes';
import { Profile } from './profile/profile';
import { Detalhes } from './detalhes/detalhes';
import { MatTableModule } from '@angular/material/table';
import { Card } from './card/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Fabio } from './fabio/fabio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ListaFuncionario,
    DeverAulaApi,
    Admin,
    Configuracoes,
    Profile,
    Detalhes,
    Card,
    Fabio,
  ],
  imports: [BrowserModule, AppRoutingModule,
     HttpClientModule, ReactiveFormsModule,
     MatTableModule, MatButtonModule,
    MatCardModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
