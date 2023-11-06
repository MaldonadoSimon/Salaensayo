import { Component, OnInit } from '@angular/core';
import { CriptoService } from '../services/cripto.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  criptos: any

  constructor(private criptoService: CriptoService){}

  ngOnInit(): void {
    this.criptoService.retornar().subscribe(result=>this.criptos=result)
  }
}
