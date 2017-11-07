import { Injectable } from '@angular/core';
import { Behaviour } from './dto/behaviour';
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

  

  private extractData(res: Response) {
    var behaviours: Behaviour[] = [];
    let body = res.json();
    for (let result of body.gherkinCollection) {
      var behaviour = new Behaviour();
      behaviour.code = result.header.code;
      behaviour.scenario = result.gherkinSintax.scenario;
      behaviour.emotion = result.header.emotion;
      behaviour.color = result.header.behaviourStatus.color;
      behaviours.push(behaviour);
    }
    return behaviours;
  }

  private extractData1(res: Response, code:string) {
    var behaviours: Behaviour[] = [];
    let body = res.json();
    for (let result of body.gherkinCollection) {
      var behaviour = new Behaviour();
      behaviour.code = result.header.code;
      behaviour.scenario = result.gherkinSintax.scenario;
      behaviour.emotion = result.header.emotion;
      behaviour.color = result.header.behaviourStatus.color;
      behaviours.push(behaviour);
    }
    return behaviours;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
