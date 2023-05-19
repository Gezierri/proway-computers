import { Injectable } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  produtosList: IProduto[] = produtos;

  constructor() {}

  public getProdutos() {
    return this.produtosList;
  }

  public getProduto(id: number) {
    return this.produtosList.find((p) => p.id === id);
  }
}
