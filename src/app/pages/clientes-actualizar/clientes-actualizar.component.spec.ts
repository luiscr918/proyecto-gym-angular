import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesActualizarComponent } from './clientes-actualizar.component';

describe('ClientesActualizarComponent', () => {
  let component: ClientesActualizarComponent;
  let fixture: ComponentFixture<ClientesActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
