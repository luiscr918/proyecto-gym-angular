import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinicipalBienvenidaComponent } from './prinicipal-bienvenida.component';

describe('PrinicipalBienvenidaComponent', () => {
  let component: PrinicipalBienvenidaComponent;
  let fixture: ComponentFixture<PrinicipalBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinicipalBienvenidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinicipalBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
