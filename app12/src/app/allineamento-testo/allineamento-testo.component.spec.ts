import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllineamentoTestoComponent } from './allineamento-testo.component';

describe('AllineamentoTestoComponent', () => {
  let component: AllineamentoTestoComponent;
  let fixture: ComponentFixture<AllineamentoTestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllineamentoTestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllineamentoTestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
