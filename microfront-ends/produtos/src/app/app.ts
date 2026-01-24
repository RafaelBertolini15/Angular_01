import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto{
  nome: string
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Camisa Angular',
      valor: 79.90,
      imagem: 'https://picsum.photos/id/1/200/150:'
    },
    {
      nome: 'Caneca Progamador',
      valor: 39.90,
      imagem: 'https://picsum.photos/id/10/200/150:'
    },
    {
      nome: 'Mouse Gamer',
      valor: 129.90,
      imagem: 'https://picsum.photos/id/100/200/150:'
    }
  ]
}
