import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoriesComponent } from './user-histories.component';

describe('UserHistoriesComponent', () => {
  let component: UserHistoriesComponent;
  let fixture: ComponentFixture<UserHistoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHistoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
