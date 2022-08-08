import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetableComponent } from './sidetable.component';

describe('SidetableComponent', () => {
  let component: SidetableComponent;
  let fixture: ComponentFixture<SidetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
