import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCambioEdicionComponent } from './tipo-cambio-edicion.component';

describe('TipoCambioEdicionComponent', () => {
  let component: TipoCambioEdicionComponent;
  let fixture: ComponentFixture<TipoCambioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCambioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCambioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
