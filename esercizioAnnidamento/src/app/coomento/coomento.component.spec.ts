import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoomentoComponent } from './coomento.component';

describe('CoomentoComponent', () => {
  let component: CoomentoComponent;
  let fixture: ComponentFixture<CoomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoomentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
