/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RvrKillsComponent } from './rvr-kills.component';
import {CharacterProfile} from '../shared/character-profile.model';
import {mockPlayerProfiles} from '../shared/mock-character-profiles';

describe('RvrKillsComponent', () => {
  let component: RvrKillsComponent;
  let fixture: ComponentFixture<RvrKillsComponent>;
  let character: CharacterProfile;
  let canvas: HTMLCanvasElement;
  let emptyCanvasCode: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvrKillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvrKillsComponent);
    component = fixture.componentInstance;

    canvas = fixture.debugElement.query(By.css('canvas')).nativeElement;
    emptyCanvasCode = canvas.toDataURL();

    //provide mock character
    character = mockPlayerProfiles[0];
    component.character = character;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have something drawn on the canvas', () => {
    let canvasCode: string = canvas.toDataURL();
    expect(canvasCode === emptyCanvasCode).toBe(false);
  });

});
