import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSectionCard } from './tournament-section-card';

describe('TournamentSectionCard', () => {
  let component: TournamentSectionCard;
  let fixture: ComponentFixture<TournamentSectionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentSectionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentSectionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
