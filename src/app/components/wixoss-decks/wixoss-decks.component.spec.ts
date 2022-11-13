import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixossDecksComponent } from './wixoss-decks.component';

describe('WixossDecksComponent', () => {
  let component: WixossDecksComponent;
  let fixture: ComponentFixture<WixossDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WixossDecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WixossDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
