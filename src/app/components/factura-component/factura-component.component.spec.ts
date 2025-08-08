import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaComponentComponent } from './factura-component.component';

describe('FacturaComponentComponent', () => {
  let component: FacturaComponentComponent;
  let fixture: ComponentFixture<FacturaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
