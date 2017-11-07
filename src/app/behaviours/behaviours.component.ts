import { Component, OnInit } from '@angular/core';
import { BehavioursService } from '../behaviours.service';
import { Behaviour } from '../dto/behaviour';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-behaviours',
  templateUrl: './behaviours.component.html',
  styleUrls: ['./behaviours.component.css']
})
export class BehavioursComponent implements OnInit {
  observableBehaviours: Observable<any>;

  behaviours: Behaviour[];

  errorMessage: String;

  colors: SelectItem[];

  emotions: SelectItem[];

  constructor(private behavioursService: BehavioursService) { }

  ngOnInit() {
    this.colors = [];
    this.colors.push({ label: 'GRE', value: 'GRE' });
    this.colors.push({ label: 'ORA', value: 'ORA' });
    this.colors.push({ label: 'RED', value: 'RED' });
    this.colors.push({ label: 'BLA', value: 'BLA' });
    this.colors.push({ label: 'BLU', value: 'BLU' });
    this.colors.push({ label: 'YEL', value: 'YEL' });

    this.emotions = [];
    this.emotions.push({ label: 'HAPPY', value: 'HPPY' });
    this.emotions.push({ label: 'UNEXPECTED', value: 'UN' });
    this.emotions.push({ label: 'SAD', value: 'SD' });
    this.emotions.push({ label: 'TIME', value: 'TM' });


    this.observableBehaviours = this.behavioursService.getBehaviours();
    this.observableBehaviours.subscribe(behaviours => this.behaviours = behaviours, error => this.errorMessage = <any>error);
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
