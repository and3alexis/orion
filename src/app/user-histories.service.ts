import { Injectable } from '@angular/core';
import { UserHistory } from './dto/userHistory';
import { Param } from './dto/param';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UserHistoriesService {

  JSONFile = 'assets/hu1_tigoune_fix_co_bills_v1.json';

  constructor(private http: Http) { }

  getUserHistories(): Observable<any> {
    return this.http.get(this.JSONFile)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getUserHistoryByCode(code:string): Observable<any> {
    return this.getUserHistories().map(item => item.find(item => item.code == code)).catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    var userHistories: UserHistory[] = [];
    let body = res.json();
    for (let result of body.userHistoryCollection) {
      var userHistory = new UserHistory();
      userHistory.code = result.code;
      userHistory.note = result.note;
      userHistory.templateDeseo =  result.template.deseo;
      userHistory.templatePara = result.template.para;
      userHistory.templateYoComo = result.template.yoComo;
      userHistories.push(userHistory);
    }
    return userHistories;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
