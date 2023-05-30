import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(public carrinho: CarrinhoService, private route: Router) {
    console.log(carrinho.totalCarrinho());
  }
}
