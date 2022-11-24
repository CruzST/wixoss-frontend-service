import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixossCardComponent } from './wixoss-card.component';

describe('WixossCardComponent', () => {
  let component: WixossCardComponent;
  let fixture: ComponentFixture<WixossCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WixossCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WixossCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
