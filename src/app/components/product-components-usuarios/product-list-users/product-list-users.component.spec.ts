import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListUsersComponent } from './product-list-users.component';

describe('ProductListUsersComponent', () => {
  let component: ProductListUsersComponent;
  let fixture: ComponentFixture<ProductListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
