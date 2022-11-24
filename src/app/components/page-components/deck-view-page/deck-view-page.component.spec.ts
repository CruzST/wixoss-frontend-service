import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckViewPageComponent } from './deck-view-page.component';

describe('DeckViewPageComponent', () => {
  let component: DeckViewPageComponent;
  let fixture: ComponentFixture<DeckViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
