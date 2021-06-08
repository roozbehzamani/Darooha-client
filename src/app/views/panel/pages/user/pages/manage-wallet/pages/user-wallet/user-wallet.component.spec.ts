/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserWalletComponent } from './user-wallet.component';

describe('UserWalletComponent', () => {
  let component: UserWalletComponent;
  let fixture: ComponentFixture<UserWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
