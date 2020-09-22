import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoequipo } from '../interfaces/info-equipoInterfaces';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info: infoPagina = {};
  cargada = false;
  equipo: infoequipo = {};
  constructor(private http: HttpClient) {
    //console.log("Servicio de la pagina listo");
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe((res: infoPagina) => {
      this.cargada = true;
      this.info = res;
      console.log(res);
    })
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-daa33.firebaseio.com/equipo.json')
    .subscribe((res: infoequipo) => {
      this.cargada = true;
      this.equipo = res;
      console.log(res);
    })
  }
  
}
