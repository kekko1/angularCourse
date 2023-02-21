import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonneResponsiveComponent } from './colonne-responsive.component';

describe('ColonneResponsiveComponent', () => {
  let component: ColonneResponsiveComponent;
  let fixture: ComponentFixture<ColonneResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonneResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColonneResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
