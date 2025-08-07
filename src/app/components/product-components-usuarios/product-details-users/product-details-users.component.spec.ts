import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsUsersComponent } from './product-details-users.component';

describe('ProductDetailsUsersComponent', () => {
  let component: ProductDetailsUsersComponent;
  let fixture: ComponentFixture<ProductDetailsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
