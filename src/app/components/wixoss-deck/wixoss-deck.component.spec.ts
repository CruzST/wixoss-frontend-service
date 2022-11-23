import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixossDeckComponent } from './wixoss-deck.component';

describe('WixossDeckComponent', () => {
  let component: WixossDeckComponent;
  let fixture: ComponentFixture<WixossDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WixossDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WixossDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
