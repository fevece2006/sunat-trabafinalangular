import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaAgregarComponent } from './tarea-agregar.component';

describe('TareaAgregarComponent', () => {
  let component: TareaAgregarComponent;
  let fixture: ComponentFixture<TareaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
