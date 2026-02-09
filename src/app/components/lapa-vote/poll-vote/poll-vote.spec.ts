import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVote } from './poll-vote';

describe('PollVote', () => {
  let component: PollVote;
  let fixture: ComponentFixture<PollVote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollVote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollVote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
