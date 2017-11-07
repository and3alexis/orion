import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { PQR } from './dto/pqr';
import { Result } from './dto/result';

@Injectable()
export class PqrsService {

  url = "http://unevm-dmap.epmtelco.com.co:8080/tigoune_fix_co_pqrs_v1/v1/pqrs/document/890901502?documentType=NT&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRvZ2VzdGlvbkIyQiIsImF1ZCI6Imh0dHA6XC9cL3BnZHIudW5lLm5ldC5jbyIsImlhdCI6MTUwMzk1NjgyMSwibmJmIjoxNTAzOTU2ODIxfQ.fzD3AxefGVjCIo0ofV9l3h8YjGVQl00FNo27nZ8pNNQ.YXBpZ2VlQUIyQg==";

  constructor(private http: Http) { }

  getPQRsWithObservable(): Observable<PQR[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    var pqrs: PQR[] = [];
    let body = res.json();
    for (let result of body.content.pqrCollection) {
      var pqr = new PQR();
      pqr.account = result.account;
      pqr.accountId = result.accountId;
      pqr.area = result.area;
      pqr.uneEstadoSIC = result.uneEstadoSIC;
      pqrs.push(pqr);
    }

    return pqrs;
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
