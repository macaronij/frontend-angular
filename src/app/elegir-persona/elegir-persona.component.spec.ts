import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirPersonaComponent } from './elegir-persona.component';

describe('ElegirPersonaComponent', () => {
  let component: ElegirPersonaComponent;
  let fixture: ComponentFixture<ElegirPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
