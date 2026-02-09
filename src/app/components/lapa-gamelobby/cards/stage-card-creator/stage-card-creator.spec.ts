import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageCardCreator } from './stage-card-creator';

describe('StageCardCreator', () => {
  let component: StageCardCreator;
  let fixture: ComponentFixture<StageCardCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageCardCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageCardCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
