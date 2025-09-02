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
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

interface Comentario {
  usuario: string;
  comentario: string;
}

interface Post {
  titulo: string;
  descripcion?: string;
  imagen: string;
  comentarios?: Comentario[];
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardContent,
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
export class PostsPage implements OnInit {
  posts: Post[] = [
    {
      titulo: 'Sonic en acción',
      descripcion: 'Sonic corre a toda velocidad para salvar el día.',
      imagen: 'assets/sonic.png',
      comentarios: [
        { usuario: 'Carlos', comentario: '¡Me encanta Sonic!' },
        { usuario: 'Ana', comentario: 'Gran imagen, muy divertida.' },
      ],
    },
    {
      titulo: 'Mario Bros',
      descripcion: 'Mario salta sobre sus enemigos en el Reino Champiñón.',
      imagen: 'assets/mario.png',
      comentarios: [
        { usuario: 'Luigi', comentario: '¡Ese es mi hermano!' },
        { usuario: 'Peach', comentario: ':D' },
      ],
    },
    {
      titulo: 'Zelda Aventuras',
      descripcion: 'Link explora nuevas mazmorras en Hyrule.',
      imagen: 'assets/zelda.png',
      comentarios: [{ usuario: 'Juan', comentario: 'Hola!' }],
    },
    {
      titulo: 'Pokémon',
      descripcion: 'Ash y Pikachu listos para una nueva batalla.',
      imagen: 'assets/pokemon.png',
      comentarios: [
        { usuario: 'María', comentario: '¡Buena suerte Ash!' },
        { usuario: 'Mario', comentario: '¡Atrápalos a todos!' },
      ],
    },
    {
      titulo: 'Papu',
      descripcion: 'El papu tiene poderes desconocidos.',
      imagen: 'assets/sonic.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
