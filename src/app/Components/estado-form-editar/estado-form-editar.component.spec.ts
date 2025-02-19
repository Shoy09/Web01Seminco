import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFormEditarComponent } from './estado-form-editar.component';

describe('EstadoFormEditarComponent', () => {
  let component: EstadoFormEditarComponent;
  let fixture: ComponentFixture<EstadoFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoFormEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
