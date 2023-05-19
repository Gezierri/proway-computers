import { Component, OnInit } from '@angular/core';
import { ICarrinho, IProduto } from '../produtos';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itemProdutos: IProduto[] = [];
  quantidade: number = 1;

  constructor(public carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itemProdutos = this.carrinhoService.totalCarrinho();
    console.log(this.itemProdutos);
  }

  public getValorTotal(): number {
    return this.itemProdutos.reduce(
      (total, produto) => total + produto.preco,
      0
    );
  }
}
