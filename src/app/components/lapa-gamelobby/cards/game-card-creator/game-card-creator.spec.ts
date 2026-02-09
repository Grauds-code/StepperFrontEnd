import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardCreator } from './game-card-creator';

describe('GameCardCreator', () => {
  let component: GameCardCreator;
  let fixture: ComponentFixture<GameCardCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
