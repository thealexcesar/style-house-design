import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from '@components/product/product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render .product-description', () => {
    fixture = TestBed.createComponent(ProductComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.product-description')?.textContent).toBe('A');
  });
});