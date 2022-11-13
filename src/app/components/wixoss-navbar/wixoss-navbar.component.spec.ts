import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixossNavbarComponent } from './wixoss-navbar.component';

describe('WixossNavbarComponent', () => {
  let component: WixossNavbarComponent;
  let fixture: ComponentFixture<WixossNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WixossNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WixossNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
