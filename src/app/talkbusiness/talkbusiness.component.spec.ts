import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkbusinessComponent } from './talkbusiness.component';

describe('TalkbusinessComponent', () => {
  let component: TalkbusinessComponent;
  let fixture: ComponentFixture<TalkbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkbusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
