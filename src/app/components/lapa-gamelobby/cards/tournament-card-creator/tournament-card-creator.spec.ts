import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCardCreator } from './tournament-card-creator';

describe('TournamentCardCreator', () => {
  let component: TournamentCardCreator;
  let fixture: ComponentFixture<TournamentCardCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentCardCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentCardCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
