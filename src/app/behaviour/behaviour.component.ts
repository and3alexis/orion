import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Behaviour } from '../dto/behaviour';
import { BehavioursService } from '../behaviours.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrls: ['./behaviour.component.css']
})
export class BehaviourComponent implements OnInit {

  behaviour: Behaviour;

  constructor(private route: ActivatedRoute, private behavioursService: BehavioursService, private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.behavioursService.getBehaviourByCode(params.get('code')))
      .subscribe(behaviour => this.behaviour = behaviour);
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

  goBack(): void {
    this.location.back();
  }



}
