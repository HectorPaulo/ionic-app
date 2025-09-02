import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";

interface Producto {
  name: string;
  price: number;
  available: boolean;
}

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent
],
})
export class RecordatorioPage implements OnInit {
  total = 0;
  
  lista_compras = ['Pan', 'Leche', 'Huevos', 'Sabritas', 'Aceite'];
  lista_compras2: Producto[] = [
    { name: 'Pan', price: 10, available: true },
    { name: 'Sabritas', price: 15, available: false },
    { name: 'Jugo', price: 20, available: true },
    { name: 'Sabritas', price: 25, available: false },
    { name: 'Leche', price: 18, available: true },
  ];
  constructor() {}
  
  sumaProductos() {
    this.lista_compras2.forEach((producto) => {
      this.total += producto.price;
    });
  }
  
  mensaje: string = '';

  agregarProducto(producto: Producto) {
    if (producto.available == true) {
      this.mensaje = "Agregado al carrito";
    } else {
      this.mensaje = "No hay stock";
    }
  }

  ngOnInit() {}
}
