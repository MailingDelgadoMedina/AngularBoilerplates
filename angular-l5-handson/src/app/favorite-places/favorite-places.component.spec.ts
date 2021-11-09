import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlacesComponent } from './favorite-places.component';

describe('FavoritePlacesComponent', () => {
  let component: FavoritePlacesComponent;
  let fixture: ComponentFixture<FavoritePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
