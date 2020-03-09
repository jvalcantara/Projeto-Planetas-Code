import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaBuscaComponent } from './planeta-busca.component';

describe('PlanetaBuscaComponent', () => {
  let component: PlanetaBuscaComponent;
  let fixture: ComponentFixture<PlanetaBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetaBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
