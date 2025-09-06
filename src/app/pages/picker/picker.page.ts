import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonPickerColumn,
  IonPickerColumnOption,
  IonPicker,
  IonCard,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonPicker,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonPickerColumn,
    IonPickerColumnOption,
  ],
})
export class PickerPage implements OnInit {
  refrescos = [
    'Coca-cola',
    'Pepsi',
    'Mirinda',
    'Manzanita',
    'Squirt',
    'Sprite',
  ];

  sizes = ['100ml', '250ml', '355ml', '500ml', '1L', '1.5L', '2L'];

  constructor() {}

  ngOnInit() {}
}
