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

  getBehaviourByCode(code:string): Observable<any> {
    return this.getBehaviours()
      .map(data => data.find(data => data.code == code)).catch(this.handleErrorObservable);
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
      behaviour.given = result.gherkinSintax.given;
      behaviour.statusCode = result.header.status.code;
      behaviour.statusHttp = result.header.status.http;
      behaviour.then = result.gherkinSintax.then;
      behaviour.when = result.gherkinSintax.when;
      behaviours.push(behaviour);
    }
    return behaviours;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
