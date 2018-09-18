import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPoolComponent } from './player-pool.component';

describe('PlayerPoolComponent', () => {
  let component: PlayerPoolComponent;
  let fixture: ComponentFixture<PlayerPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
