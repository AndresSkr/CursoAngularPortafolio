import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: producto[] = [];
  prodcutosFiltados: producto[] = []
  constructor(private http: HttpClient) {

    this.cargarProdcutos();
  }

  private cargarProdcutos() {

    return new Promise((resolve, rejects) => {

      this.http.get('https://angular-html-daa33.firebaseio.com/productos_idx.json')
        .subscribe((res: producto[]) => {
          this.productos = res;
          setTimeout(() => {
            this.cargando = false;
          }, 2000);
          resolve();
        });

    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-daa33.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      //cargar prodcuto
      this.cargarProdcutos().then(() => {
        //ajecutar despues de tenelos los prodcutos
        //aplicar filtro
        this.filtarProductos(termino);
      })
    } else {
      //aplicar filtro
      this.filtarProductos(termino);
    }
  }

  filtarProductos(termino: string) {
    
    this.prodcutosFiltados = [];

    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf( termino )>=0 || tituloLower.indexOf( termino )>=0){
        this.prodcutosFiltados.push(prod)
      }
    });
  }

}
