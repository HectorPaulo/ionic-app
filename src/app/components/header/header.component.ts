import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonBackButton, IonButtons, IonToolbar, IonHeader, IonTitle],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string = 'No hay titulo';
  constructor() {}

  ngOnInit() {}
}
