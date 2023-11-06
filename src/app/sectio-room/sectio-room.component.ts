import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectio-room',
  templateUrl: './sectio-room.component.html',
  styleUrls: ['./sectio-room.component.css']
})
export class SectioRoomComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  
  prod ={
    codigo: 0,
    equipo: "",
    marca: "",
  }
  articulos = [
    {codigo:1,equipo:"Guitarra Eléctrica",marca:"Cochayuyo"},
    {codigo:2,equipo:"Micrófono",marca:"Cochayuyo"},
    {codigo:3,equipo:"Amp. Bajo",marca:"Cochayuyo"},
    {codigo:4,equipo:"Amp. Guitarra",marca:"Cochayuyo"},
  ]
  hayRegistros(){
    return this.articulos.length>0;
  }
  borrar(codigo:number){
    for (let i = 0; i <this.articulos.length; i++) {
      if(this.articulos[i].codigo==codigo){
        this.articulos.splice(i,1)
        return
      }
      
    }

  }
  agregar(){
    if (this.prod.codigo==0) {
      alert("Debe ingresar un codigo distinto a cero")
      return;
    }
    for (let i = 0; i < this.articulos.length; i++) 
    if(this.articulos[i].codigo==this.prod.codigo)
    {
     alert("Existe un producto con dicho codigo")
     return;
    }
    this.articulos.push({codigo:this.prod.codigo,equipo:this.prod.equipo,marca:this.prod.marca});
    this.prod.codigo=0
    this.prod.equipo=""
    this.prod.marca=""
  }
  seleccionar(prod:{codigo:number;equipo:string;marca:string;}) {
  this.prod.codigo=prod.codigo;
  this.prod.equipo=prod.equipo;
  this.prod.marca=prod.marca
  }   
  modificar(){
    for (let i = 0; i<this.articulos.length; i++){
      if(this.articulos[i].codigo==this.prod.codigo){
        this.articulos[i].equipo=this.prod.equipo;
        this.articulos[i].marca=this.prod.marca;
        return
      }
    }
    alert("No existe el codigo del producto")
        

  }

  
  sala ={
    codigo: 0,
    horario: "",
    ocupado: 0,
  }
  salas = [
    {codigo:1,horario:"10:00-12:00",ocupado:0},
    {codigo:2,horario:"12:00-14:00",ocupado:0},
  ]
  seleccionarSala(sala:{codigo:number;horario:string;ocupado:number;}) {
  this.sala.codigo=sala.codigo;
  this.sala.horario=sala.horario;
  this.sala.ocupado=sala.ocupado
  }   
  modificarSala(){
    for (let i = 0; i<this.salas.length; i++){
      if(this.salas[i].codigo==this.sala.codigo){
        this.salas[i].horario=this.sala.horario;
        this.salas[i].ocupado=this.sala.ocupado;
        return
      }
    }
    alert("No existe el codigo de la sala")
  }
  disponible(sala:{codigo:number;horario:string;ocupado:number;}){
    return sala.ocupado == 0
  }
  ocupada(sala:{codigo:number;horario:string;ocupado:number;}){
    return sala.ocupado == 1
  }
  agregarSala(){
    if (this.sala.codigo==0) {
      alert("Debe ingresar un codigo distinto a cero")
      return;
    }
    for (let i = 0; i < this.salas.length; i++) 
    if(this.salas[i].codigo==this.sala.codigo)
    {
     alert("Existe una sala con dicho codigo")
     return;
    }
    this.salas.push({codigo:this.sala.codigo,horario:this.sala.horario,ocupado:this.sala.ocupado});
    this.sala.codigo=0
    this.sala.horario=""
    this.sala.ocupado=0
  }
  eliminarSala(codigo:number){
    for (let i = 0; i <this.salas.length; i++) {
      if(this.salas[i].codigo==codigo){
        this.salas.splice(i,1)
        return
      }
      
    }
  }

}

   
