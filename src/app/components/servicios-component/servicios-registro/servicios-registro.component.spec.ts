import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosRegistroComponent } from './servicios-registro.component';

describe('ServiciosRegistroComponent', () => {
  let component: ServiciosRegistroComponent;
  let fixture: ComponentFixture<ServiciosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
