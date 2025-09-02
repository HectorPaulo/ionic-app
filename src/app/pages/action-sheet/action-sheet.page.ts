import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ActionSheetController, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, cash, heart } from 'ionicons/icons';
import { Router } from '@angular/router';
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    HeaderComponent
],
})
export class ActionSheetPage implements OnInit {
openContactos() {
  this.router.navigateByUrl('/contactos');
}
  private actionSheetCtrl = inject(ActionSheetController);
  private alertCtrl = inject(AlertController);
  private router = inject(Router);
  constructor() {
    addIcons({ heart, cash, cart });
  }

  async Comprado() {
    const alert = await this.alertCtrl.create({
      message: 'COMPRADO!',
    });
    await alert.present();
  }

  ngOnInit() {}

  async openOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones del producto',
      buttons: [
        {
          icon: 'heart',
          text: 'Agregar a favoritos',
          handler: () => {
            this.router.navigateByUrl('buttons');
          },
        },
        {
          text: 'Agregar al carrito',
          icon: 'cart',
        },
        {
          text: 'Comprar',
          icon: 'cash',
          handler: () => {
            this.Comprado();
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
