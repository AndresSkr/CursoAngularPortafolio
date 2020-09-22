import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/info-productosInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProdcutos();
  }

  private cargarProdcutos() {

    this.http.get('https://angular-html-daa33.firebaseio.com/productos_idx.json').subscribe((res: producto[]) => {
      console.log(res);
      this.productos = res;
      setTimeout(() => {
        this.cargando = false;
      }, 2000);
    });

  }
}
