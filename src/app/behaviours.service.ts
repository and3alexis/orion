import { Injectable } from '@angular/core';
import { Behaviour } from './dto/behaviour';
import { Param } from './dto/param';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class BehavioursService {

  JSONFile = 'assets/hu1_tigoune_fix_co_bills_v1.json';

  constructor(private http: Http) { }

  getBehaviours(): Observable<any> {
    return this.http.get(this.JSONFile)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getBehaviourByUserHistory(code: string): Observable<any> {
    console.info(code);
    var data1 = this.getBehaviours().map(item => item.map(function(item){
      if(item.userHistories.find(item => item == code)){
        return item;
      }
    })).catch(this.handleErrorObservable);
    return data1;
  }

  getBehaviourByCode(code: string): Observable<any> {
    return this.getBehaviours()
      .map(data => data.find(data => data.code == code)).catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    var behaviours: Behaviour[] = [];
    let body = res.json();
    for (let result of body.gherkinCollection) {
      var behaviour = new Behaviour();

      behaviour.userHistories = result.userHistoryCollection;
      behaviour.code = result.header.code;
      behaviour.scenario = result.gherkinSintax.scenario;
      behaviour.emotion = result.header.emotion;
      behaviour.color = result.header.behaviourStatus.color;
      behaviour.statusCode = result.header.status.code;
      behaviour.statusHttp = result.header.status.http;
      behaviour.given = result.gherkinSintax.given;
      var params: Param[] = [];
      for (let item of result.gherkinSintax.givenParams) {
        var param = new Param();
        param.key = item.key;
        param.description = item.description;
        param.value = item.value;
        params.push(param);
      }
      behaviour.givenParams = params;
      behaviour.when = result.gherkinSintax.when;
      var params: Param[] = [];
      for (let item of result.gherkinSintax.whenParams) {
        var param = new Param();
        param.key = item.key;
        param.description = item.description;
        param.value = item.value;
        params.push(param);
      }
      behaviour.whenParams = params;
      behaviour.then = result.gherkinSintax.then;
      var params: Param[] = [];
      for (let item of result.gherkinSintax.thenParams) {
        var param = new Param();
        param.key = item.key;
        param.description = item.description;
        param.value = item.value;
        params.push(param);
      }
      behaviour.thenParams = params;
      behaviours.push(behaviour);
    }
    return behaviours;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
