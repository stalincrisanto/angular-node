import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraestrutura',
  templateUrl: './infraestrutura.component.html',
  styleUrls: ['./infraestrutura.component.css']
})
export class InfraestruturaComponent implements OnInit {

  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'cod_sede', header: 'Código' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'direccion', header: 'Dirección' },
      { field: 'telefono', header: 'Teléfono' },
      { field: 'codigo_postal', header: 'Código Postal' }
  ];
  }
  

}
