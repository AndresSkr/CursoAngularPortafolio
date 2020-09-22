import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   constructor( public InfopaginaService: InfopaginaService,
    public producService: ProductosService ){

  } 
}
