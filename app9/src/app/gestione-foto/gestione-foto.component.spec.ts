import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneFotoComponent } from './gestione-foto.component';

describe('GestioneFotoComponent', () => {
  let component: GestioneFotoComponent;
  let fixture: ComponentFixture<GestioneFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
