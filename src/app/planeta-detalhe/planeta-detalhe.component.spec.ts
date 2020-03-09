import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaDetalheComponent } from './planeta-detalhe.component';

describe('PlanetaDetalheComponent', () => {
  let component: PlanetaDetalheComponent;
  let fixture: ComponentFixture<PlanetaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
