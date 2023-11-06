import { Component, OnInit } from '@angular/core';
import { CriptoService } from './services/cripto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}
   

  mostrando_api_1 = false
  mostrando_api_2 = false

  mostrar_ocultar_api_1() { this.mostrando_api_1 = !this.mostrando_api_1 }
  mostrar_ocultar_api_2() { this.mostrando_api_2 = !this.mostrando_api_2 }
  metodo_mostrando_api_1() { return this.mostrando_api_1 }
  metodo_mostrando_api_2() { return this.mostrando_api_1 }

}


