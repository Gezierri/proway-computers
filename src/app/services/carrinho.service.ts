import { Injectable } from '@angular/core';
import { ICarrinho, IProduto } from '../produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  produtosCarrinho: ICarrinho[] = [];

  constructor() {}

  public totalCarrinho(): ICarrinho[] {
    const produto = localStorage.getItem('produto');
    if (produto) {
      this.produtosCarrinho = JSON.parse(localStorage.getItem('produto') || '');
      return this.produtosCarrinho;
    } else {
      return [];
    }
  }

  public adicionaCarrinho(produto: ICarrinho) {
    this.produtosCarrinho.push(produto);
    localStorage.setItem('produto', JSON.stringify(this.produtosCarrinho));
  }

  public limparCarrinho(): void {
    this.produtosCarrinho = [];
    localStorage.clear();
  }

  public removerItemCarrinho(produtoId: number) {
    this.produtosCarrinho = this.produtosCarrinho.filter(
      (produto) => produto.id !== produtoId
    );
    localStorage.setItem('produto', JSON.stringify(this.produtosCarrinho));
  }
}
