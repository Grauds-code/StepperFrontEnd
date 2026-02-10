import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVotePublish } from './poll-vote-publish';

describe('PollVotePublish', () => {
  let component: PollVotePublish;
  let fixture: ComponentFixture<PollVotePublish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollVotePublish],
    }).compileComponents();

    fixture = TestBed.createComponent(PollVotePublish);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
