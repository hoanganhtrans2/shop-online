import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetStyleComponent } from './street-style.component';

describe('StreetStyleComponent', () => {
  let component: StreetStyleComponent;
  let fixture: ComponentFixture<StreetStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
