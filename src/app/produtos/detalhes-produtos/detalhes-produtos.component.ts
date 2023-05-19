import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css'],
})
export class DetalhesProdutosComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private activatedRoute: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  public getProduto() {
    const routeParam = this.activatedRoute.snapshot.paramMap;
    const produtoId = Number(routeParam.get('id'));
    console.log(produtoId);
    this.produto = this.produtosService.getProduto(produtoId);
    return this.produto;
  }

  public adicionarCarrinho() {
    this.notificacaoService.notificar('adicionado ao carrinho');
    const produtoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionaCarrinho(produtoCarrinho);
  }

  ngOnInit(): void {
    this.getProduto();
  }
}
