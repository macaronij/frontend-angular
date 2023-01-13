import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEduComponent } from './admin-edu.component';

describe('AdminEduComponent', () => {
  let component: AdminEduComponent;
  let fixture: ComponentFixture<AdminEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
