import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonButton,
  ActionSheetController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, pencil, person, trash } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { HeaderComponent } from "src/app/components/header/header.component";

interface Contacto {
  nombre: string;
  telefono: number;
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent
],
})
export class ContactosPage implements OnInit {
  contactos: Contacto[] = [
    { nombre: 'Juan Perez', telefono: 1234567891 },
    { nombre: 'Maria Gomez', telefono: 9876543210 },
    { nombre: 'Pedro Martinez', telefono: 1234567890 },
    { nombre: 'Ana Torres', telefono: 4567890123 },
    { nombre: 'Luis Miguel', telefono: 3216549870 },
  ];
  private actionSheetCtrl = inject(ActionSheetController);

  constructor() {
      addIcons({person});
  }

  ngOnInit() {
    addIcons({ person, call, pencil, trash });
  }

  async actionContactos(contacto: Contacto) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: contacto.nombre,
      buttons: [
        {
          icon: 'call',
          text: 'Llamar',
          handler: () => {
            console.log('Llamando a', contacto.telefono);
          },
        },
        {
          icon: 'pencil',
          text: 'Editar',
          handler: () => {
            console.log('Editar contacto', contacto.nombre);
          },
        },
        {
          icon: 'trash',
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Eliminar contacto', contacto.nombre);
          },
        },
      ],
    });
    await actionSheet.present();
  }
  Comprado() {
    throw new Error('Method not implemented.');
  }
}
