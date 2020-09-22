import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info : infoPagina ={};
  cargada = false;

  constructor( private http: HttpClient) {
   //console.log("Servicio de la pagina listo");
    //Leer el archivo Json

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (res: infoPagina) => {
      this.cargada=true;
      this.info = res;
      console.log(res);
    })
  }
}
