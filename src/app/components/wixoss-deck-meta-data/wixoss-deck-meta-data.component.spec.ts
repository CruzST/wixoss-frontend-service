import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixossDeckMetaDataComponent } from './wixoss-deck-meta-data.component';

describe('WixossDeckMetaDataComponent', () => {
  let component: WixossDeckMetaDataComponent;
  let fixture: ComponentFixture<WixossDeckMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WixossDeckMetaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WixossDeckMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
