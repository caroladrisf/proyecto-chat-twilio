import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsCrudComponent } from './channels-crud.component';

describe('ChannelsCrudComponent', () => {
  let component: ChannelsCrudComponent;
  let fixture: ComponentFixture<ChannelsCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
