import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosActualizarComponent } from './servicios-actualizar.component';

describe('ServiciosActualizarComponent', () => {
  let component: ServiciosActualizarComponent;
  let fixture: ComponentFixture<ServiciosActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
