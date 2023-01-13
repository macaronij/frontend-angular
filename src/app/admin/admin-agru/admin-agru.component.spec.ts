import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgruComponent } from './admin-agru.component';

describe('AdminAgruComponent', () => {
  let component: AdminAgruComponent;
  let fixture: ComponentFixture<AdminAgruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAgruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAgruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
