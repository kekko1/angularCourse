import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipiEventiComponent } from './tipi-eventi.component';

describe('TipiEventiComponent', () => {
  let component: TipiEventiComponent;
  let fixture: ComponentFixture<TipiEventiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipiEventiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipiEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
