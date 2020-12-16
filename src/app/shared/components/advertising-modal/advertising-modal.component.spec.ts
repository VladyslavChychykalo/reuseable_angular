import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingModalComponent } from './advertising-modal.component';

describe('AdvertisingModalComponent', () => {
  let component: AdvertisingModalComponent;
  let fixture: ComponentFixture<AdvertisingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
