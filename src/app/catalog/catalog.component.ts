import { Component } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [PizzaService]
})
export class CatalogComponent {
  pizzaList: Pizza[];
  selectedPizza: Pizza;

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.getPizzasSlowly().then(pizzas => this.pizzaList = pizzas);
  }

  onSelect (pizza) {
    this.selectedPizza = pizza;
  }
}
