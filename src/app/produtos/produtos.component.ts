import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = produtos;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public showProdutos(id: number) {
    this.router.navigate(['/produtos', id]);
  }

  ngOnInit(): void {
    const produtos = this.produtoService.getProdutos();

    this.activatedRoute.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLocaleLowerCase();

      if (descricao) {
        this.produtos = produtos.filter((p) =>
          p.descricao.toLocaleLowerCase().includes(descricao)
        );
        return;
      }
      this.produtos = produtos;
    });
  }
}
