import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) { }
  retornar(){
    return this.http.get("https://api.gael.cloud/general/public/sismos")
  }
}

