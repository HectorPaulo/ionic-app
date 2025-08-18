import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonIcon } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {alarm, balloon, home} from 'ionicons/icons';

interface menuItem {
  name: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, RouterLink],
})
export class HomePage {
  menu: menuItem[] = [
    {
      name: 'Recordatorio',
      url: '/recordatorio',
      icon: 'home',
      color: 'primary'
    },
    {
      name: 'Alerts',
      url: '/alerts',
      icon: 'alarm',
      color: 'secondary'
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'balloon',
      color: 'success'
    }
  ];
  constructor() {
    addIcons({home, alarm, balloon})
  }
}