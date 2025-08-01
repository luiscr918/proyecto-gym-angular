import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionPageComponent } from './suscripcion-page.component';

describe('SuscripcionPageComponent', () => {
  let component: SuscripcionPageComponent;
  let fixture: ComponentFixture<SuscripcionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscripcionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuscripcionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
