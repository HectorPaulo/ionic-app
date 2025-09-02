import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonChip,
  IonIcon,
  IonAvatar,
  IonLabel,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { pin, close } from 'ionicons/icons';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.page.html',
  styleUrls: ['./chips.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonAvatar,
    IonIcon,
    IonChip,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class ChipsPage implements OnInit {
  constructor() {
    addIcons({ pin, close });
  }

  ngOnInit() {}
}
