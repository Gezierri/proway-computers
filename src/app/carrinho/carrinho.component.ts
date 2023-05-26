import { Component, OnInit } from '@angular/core';
import { ICarrinho, IProduto } from '../produtos';
import { CarrinhoService } from '../services/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itemProdutos: IProduto[] = [];
  quantidade: number = 1;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemProdutos = this.carrinhoService.totalCarrinho();
    console.log(this.itemProdutos);
  }

  public getValorTotal(): number {
    return this.itemProdutos.reduce(
      (total, produto) => total + produto.preco * this.quantidade,
      0
    );
  }

  public finalizarCompra() {
    alert('Compra finalizada!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

  public removerItens(produtoId: number) {
    this.itemProdutos = this.itemProdutos.filter(
      (produto) => produto.id !== produtoId
    );
    this.carrinhoService.removerItemCarrinho(produtoId);
  }
}
