import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  imports: [RouterLink],
})
export class ProductCard {
  discount = input<number>();
  like = input<boolean>();
  cart = input<boolean>();
  image = input<string>();
  costs = input<number>();
  productName = input<string>();
  idProductCard = input<number>();
  onLikeEmmiter = output<boolean>();

  toggleLikeProduct() {}
  addProductCart() {}
}
