import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderPageComponent } from './deck-builder-page.component';

describe('DeckBuilderPageComponent', () => {
  let component: DeckBuilderPageComponent;
  let fixture: ComponentFixture<DeckBuilderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckBuilderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckBuilderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
