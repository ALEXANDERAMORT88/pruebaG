import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationNvbarComponent } from './navigation-nvbar.component';

describe('NavigationNvbarComponent', () => {
  let component: NavigationNvbarComponent;
  let fixture: ComponentFixture<NavigationNvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationNvbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationNvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
