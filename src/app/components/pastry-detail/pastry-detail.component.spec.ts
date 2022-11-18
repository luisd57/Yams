import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryDetailComponent } from './pastry-detail.component';

describe('PastryDetailComponent', () => {
  let component: PastryDetailComponent;
  let fixture: ComponentFixture<PastryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
