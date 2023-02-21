import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiferimentiComponent } from './riferimenti.component';

describe('RiferimentiComponent', () => {
  let component: RiferimentiComponent;
  let fixture: ComponentFixture<RiferimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiferimentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiferimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
