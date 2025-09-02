import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  AlertController,
  IonIcon,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent
  ],
})
export class AlertsPage implements OnInit {
  private alertCtrl = inject(AlertController);
  constructor() {}

  ngOnInit() {}

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hola, soy una alerta de IONIC',
      subHeader: 'Probando tetas...',
      message: 'Estoy usando alert controller para manipular las propiedades',
    });
    await alert.present();
  }

  async openAlertButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Advertencia',
      backdropDismiss: false,
      message: '¿Autorizas a esta app de usar tu localización?',
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Aceptar',
        },
      ],
    });
    await alert.present();
  }

  async openLogin() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      backdropDismiss: false,
      inputs: [
        {
          type: 'text',
          placeholder: 'Escribe tu e-mail',
        },
        {
          type: 'password',
          placeholder: 'Escribe tu contraseña',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('🥺');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Me estoy logueando... 😛');
          },
        },
      ],
    });
    await alert.present();
  }
  async openCustomized() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta personalizada',
      subHeader: '¡Personaliza tu experiencia!',
      backdropDismiss: false,
      message: 'Por favor, ingresa los siguientes datos:',
      cssClass: 'custom-alert',
      inputs: [
        {
          type: 'text',
          placeholder: '¿Cuál es tu apodo?',
          name: 'nickname',
        },
        {
          type: 'number',
          placeholder: '¿Cuántos años tienes?',
          name: 'age',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alerta cancelada');
          },
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log('Datos ingresados:');
            console.log('Apodo:', data.nickname);
            console.log('Edad:', data.age);
          },
        },
      ],
    });
    await alert.present();
  }
}
