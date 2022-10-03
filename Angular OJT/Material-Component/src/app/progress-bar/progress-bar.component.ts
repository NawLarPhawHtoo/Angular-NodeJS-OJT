import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  modeps: ProgressSpinnerMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() { }

  ngOnInit(): void {
  }

}
