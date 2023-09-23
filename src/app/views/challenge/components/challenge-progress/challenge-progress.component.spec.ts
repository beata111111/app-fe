import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeProgressComponent } from './challenge-progress.component';

describe('ChallengeProgressComponent', () => {
  let component: ChallengeProgressComponent;
  let fixture: ComponentFixture<ChallengeProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeProgressComponent]
    });
    fixture = TestBed.createComponent(ChallengeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
