import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  constructor(private http: HttpClient) { }
  retornar(){
    return this.http.get("https://api2.binance.com/api/v3/ticker/24hr")
  }
}

