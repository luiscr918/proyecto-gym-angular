import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClienteComponentComponent } from './panel-cliente-component.component';

describe('PanelClienteComponentComponent', () => {
  let component: PanelClienteComponentComponent;
  let fixture: ComponentFixture<PanelClienteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelClienteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelClienteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
