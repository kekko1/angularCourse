import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonneFisseComponent } from './colonne-fisse.component';

describe('ColonneFisseComponent', () => {
  let component: ColonneFisseComponent;
  let fixture: ComponentFixture<ColonneFisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonneFisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColonneFisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
