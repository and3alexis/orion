import { Component, OnInit } from '@angular/core';
import { BehavioursService } from '../behaviours.service';
import { UserHistoriesService } from '../user-histories.service';
import { Behaviour } from '../dto/behaviour';
import { UserHistory } from '../dto/userHistory';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-behaviours',
  templateUrl: './behaviours.component.html',
  styleUrls: ['./behaviours.component.css']
})
export class BehavioursComponent implements OnInit {
  observableUserHistory: Observable<any>;

  userHistory:UserHistory;

  observableBehaviours: Observable<any>;

  behaviours: Behaviour[];

  errorMessage: String;

  colors: SelectItem[];

  emotions: SelectItem[];

  constructor(private route: ActivatedRoute,
    private behavioursService: BehavioursService,
    private userHistoriesService: UserHistoriesService) { }

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

    this.route.paramMap
      .switchMap((params: ParamMap) => this.behavioursService.getBehaviourByUserHistory(params.get('userHistory')))
      .subscribe(behaviours => this.behaviours = behaviours);

      this.route.paramMap
        .switchMap((params: ParamMap) => this.userHistoriesService.getUserHistoryByCode(params.get('userHistory')))
        .subscribe(userHistory => this.userHistory = userHistory);
  }

}
