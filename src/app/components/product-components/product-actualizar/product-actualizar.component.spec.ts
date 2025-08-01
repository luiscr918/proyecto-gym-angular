import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActualizarComponent } from './product-actualizar.component';

describe('ProductActualizarComponent', () => {
  let component: ProductActualizarComponent;
  let fixture: ComponentFixture<ProductActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
