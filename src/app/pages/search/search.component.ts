import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    public producService: ProductosService) { }

  ngOnInit(): void {

    this.router.params.subscribe(parametro => {
      this.producService.buscarProducto(parametro['termino']);
    })

  }

}
