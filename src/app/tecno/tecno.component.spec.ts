import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoComponent } from './tecno.component';

describe('TecnoComponent', () => {
  let component: TecnoComponent;
  let fixture: ComponentFixture<TecnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
