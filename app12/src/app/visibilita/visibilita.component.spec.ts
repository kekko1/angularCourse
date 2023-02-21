import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilitaComponent } from './visibilita.component';

describe('VisibilitaComponent', () => {
  let component: VisibilitaComponent;
  let fixture: ComponentFixture<VisibilitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
