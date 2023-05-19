import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = produtos;

  constructor(private produtoService: ProdutosService, private router: Router) {}

  public getAll() {
    this.produtos = this.produtoService.getProdutos();
    return this.produtos;
  }

  public showProdutos(id: number) {
    this.router.navigate(['/produtos', id]);
  }

  ngOnInit(): void {
    this.getAll();
  }
}
