import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeverAulaApi } from './dever-aula-api';

describe('DeverAulaApi', () => {
  let component: DeverAulaApi;
  let fixture: ComponentFixture<DeverAulaApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeverAulaApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeverAulaApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
