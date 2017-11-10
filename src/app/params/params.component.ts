import { Component, Input, OnInit } from '@angular/core';
import { Param } from '../dto/param';

@Component({
  selector: 'behaviour-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  @Input() params: Param[];

  items: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit() {

  }

}
