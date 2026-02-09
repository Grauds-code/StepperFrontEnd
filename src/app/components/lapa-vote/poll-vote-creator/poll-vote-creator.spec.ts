import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVoteCreator } from './poll-vote-creator';

describe('PollVoteCreator', () => {
  let component: PollVoteCreator;
  let fixture: ComponentFixture<PollVoteCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollVoteCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollVoteCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
