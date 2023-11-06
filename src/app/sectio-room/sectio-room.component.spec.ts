import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioRoomComponent } from './sectio-room.component';

describe('SectioRoomComponent', () => {
  let component: SectioRoomComponent;
  let fixture: ComponentFixture<SectioRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
