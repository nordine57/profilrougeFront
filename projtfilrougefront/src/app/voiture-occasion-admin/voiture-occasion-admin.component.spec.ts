import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureOccasionAdminComponent } from './voiture-occasion-admin.component';

describe('VoitureOccasionAdminComponent', () => {
  let component: VoitureOccasionAdminComponent;
  let fixture: ComponentFixture<VoitureOccasionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoitureOccasionAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoitureOccasionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
