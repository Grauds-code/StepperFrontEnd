import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapaVote } from './lapa-vote';

describe('LapaVote', () => {
  let component: LapaVote;
  let fixture: ComponentFixture<LapaVote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LapaVote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapaVote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
