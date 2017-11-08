import { Component, OnInit } from '@angular/core';
import { UserHistoriesService } from '../user-histories.service';
import { UserHistory } from '../dto/userHistory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-histories',
  templateUrl: './user-histories.component.html',
  styleUrls: ['./user-histories.component.css']
})
export class UserHistoriesComponent implements OnInit {

  observableUserHistories: Observable<any>;

  userHistories: UserHistory[];

  constructor(private userHistoriesService: UserHistoriesService) { }

  ngOnInit() {
    this.observableUserHistories = this.userHistoriesService.getUserHistories();
    this.observableUserHistories.subscribe(userHistories => this.userHistories = userHistories);
  }

}
