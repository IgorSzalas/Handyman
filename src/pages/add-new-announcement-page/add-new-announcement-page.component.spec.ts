import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAnnouncementPageComponent } from './add-new-announcement-page.component';

describe('AddNewAnnouncementPageComponent', () => {
  let component: AddNewAnnouncementPageComponent;
  let fixture: ComponentFixture<AddNewAnnouncementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewAnnouncementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewAnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
