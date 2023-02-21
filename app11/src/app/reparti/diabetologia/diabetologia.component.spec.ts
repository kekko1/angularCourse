import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetologiaComponent } from './diabetologia.component';

describe('DiabetologiaComponent', () => {
  let component: DiabetologiaComponent;
  let fixture: ComponentFixture<DiabetologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabetologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
