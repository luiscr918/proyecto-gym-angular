import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAdminPageComponent } from './servicios-admin-page.component';

describe('ServiciosAdminPageComponent', () => {
  let component: ServiciosAdminPageComponent;
  let fixture: ComponentFixture<ServiciosAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosAdminPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
