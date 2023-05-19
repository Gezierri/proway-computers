import { Injectable } from '@angular/core';
import { ICarrinho, IProduto } from '../produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  produtosCarrinho: ICarrinho[] = [];

  constructor() {}

  public totalCarrinho(): ICarrinho[] {
    this.produtosCarrinho = JSON.parse(localStorage.getItem('produto') || '');
    return this.produtosCarrinho;
  }

  public adicionaCarrinho(produto: ICarrinho) {
    this.produtosCarrinho.push(produto);
    localStorage.setItem('produto', JSON.stringify(this.produtosCarrinho));
  }

  public limparCarrinho(): void {
    this.produtosCarrinho = [];
    localStorage.clear();
  }

  public removerItem(produtoId: number): void {
    this.produtosCarrinho = JSON.parse(localStorage.getItem('produto') || '');
    const novaLista = this.produtosCarrinho.filter((p) => p.id == produtoId);
    console.log(this.produtosCarrinho);
  }
}
