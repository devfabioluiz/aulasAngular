import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fabio } from './fabio';

describe('Fabio', () => {
  let component: Fabio;
  let fixture: ComponentFixture<Fabio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fabio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fabio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
