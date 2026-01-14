import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Lugar } from '../../lugares/lugar';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro : string = '';
  categoriaFiltro : string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.ObterTodas().
    subscribe(categorias => this.categoriasFiltro = categorias)

    this.lugarService.obterTodos().
    subscribe(lugares => this.lugares = lugares);
  }

  getTotalEstrelar(lugar: Lugar) : string {
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).
    subscribe(resultado => this.lugares = resultado);
  }

}
