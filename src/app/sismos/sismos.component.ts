import { Component, OnInit } from '@angular/core';
import { DolarService } from '../services/dolar.service';

@Component({
  selector: 'app-sismos',
  templateUrl: './sismos.component.html',
  styleUrls: ['./sismos.component.css']
})
export class SismosComponent implements OnInit {

  dolares: any

  constructor(private dolarService: DolarService){}

  ngOnInit(): void {
    this.dolarService.retornar().subscribe(result=>this.dolares=result)
  }
}

