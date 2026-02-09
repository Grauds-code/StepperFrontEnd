import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageCard } from './stage-card';

describe('StageCard', () => {
  let component: StageCard;
  let fixture: ComponentFixture<StageCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
