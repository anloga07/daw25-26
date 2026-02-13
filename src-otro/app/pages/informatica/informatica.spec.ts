import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informatica } from './informatica';

describe('Informatica', () => {
  let component: Informatica;
  let fixture: ComponentFixture<Informatica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informatica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informatica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
