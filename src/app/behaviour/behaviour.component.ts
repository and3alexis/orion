import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Behaviour } from '../dto/behaviour';
import { BehavioursService } from '../behaviours.service';

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrls: ['./behaviour.component.css']
})
export class BehaviourComponent implements OnInit {

  behaviour: Behaviour;

  constructor(private route: ActivatedRoute, private behavioursService: BehavioursService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.behavioursService.getBehaviourByCode(params.get('code')))
      .subscribe(behaviour => this.behaviour = behaviour);
  }



}
