import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'behaviour-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})
export class EmotionComponent implements OnInit {

  @Input() emotion:string;

  constructor() { }

  ngOnInit() {
  }

}
