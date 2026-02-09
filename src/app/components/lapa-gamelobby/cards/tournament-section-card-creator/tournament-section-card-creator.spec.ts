import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSectionCardCreator } from './tournament-section-card-creator';

describe('TournamentSectionCardCreator', () => {
  let component: TournamentSectionCardCreator;
  let fixture: ComponentFixture<TournamentSectionCardCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentSectionCardCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentSectionCardCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
