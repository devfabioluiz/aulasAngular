import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFuncionario } from './formulario-funcionario';

describe('FormularioFuncionario', () => {
  let component: FormularioFuncionario;
  let fixture: ComponentFixture<FormularioFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioFuncionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
