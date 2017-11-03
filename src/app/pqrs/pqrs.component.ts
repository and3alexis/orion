import { Component, OnInit } from '@angular/core';
import { PQR } from '../dto/pqr';
import { PqrsService } from '../pqrs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {

  observablePQRs: Observable<PQR[]>;

  pqrs: PQR[];

  errorMessage: String;


  constructor(private pqrsService: PqrsService) { }

  ngOnInit() {
    this.observablePQRs = this.pqrsService.getPQRsWithObservable();
    this.observablePQRs.subscribe(pqrs => this.pqrs = pqrs, error => this.errorMessage = <any>error);
  }

}
