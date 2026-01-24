import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  ngOnInit(): void {
      const dados = [
        {categoria: 'Eletronicos', valor: 1200},
        {categoria: 'Roupas', valor: 900},
        {categoria: 'Ferramentas', valor: 650},
        {categoria: 'Acessórios', valor: 1459},
        {categoria: 'Decorações', valor: 24},
        {categoria: 'Livros', valor: 100}
      ];

      const labels = dados.map(v => v.categoria)
      const valores = dados.map(v => v.valor)

      new Chart('barChart',{
        type: 'bar',
        data:{
          labels: labels,
          datasets: [
            {
              label: 'Categorias mais vendidas',
              data: valores,
              backgroundColor: 'rgba(31,82,146,0.6)'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  }
}
