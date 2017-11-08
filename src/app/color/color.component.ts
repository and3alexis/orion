import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'behaviour-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
  }

  changeColor(value) {
    if (value === 'GRE') {
      return '#40FF00';
    }
    if (value === 'ORA') {
      return '#FF8000';
    }
    if (value === 'RED') {
      return '#FF0000';
    }
    if (value === 'BLA') {
      return '#000000';
    }
    if (value === 'BLU') {
      return '#00BFFF';
    }
    return '#FFFF00';
  }

}
