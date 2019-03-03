import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidNavComponent } from './mid-nav.component';

describe('MidNavComponent', () => {
  let component: MidNavComponent;
  let fixture: ComponentFixture<MidNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
