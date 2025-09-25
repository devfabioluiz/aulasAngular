import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuncionario } from './lista-funcionario';

describe('ListaFuncionario', () => {
  let component: ListaFuncionario;
  let fixture: ComponentFixture<ListaFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaFuncionario],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
