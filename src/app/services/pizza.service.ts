import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';

@Injectable()
export class PizzaService {
    getPizzas() {
        return Promise.resolve([
            { id: 1, name: 'Reine', price: 12, image: 'assets/img/reine.png' },
            { id: 2, name: '4 fromages', price: 13, image: 'assets/img/4fromages.png' },
            { id: 3, name: 'Orientale', price: 11, image: 'assets/img/orientale.png' },
            { id: 4, name: 'Cannibale', price: 9, image: 'assets/img/cannibale.png' }
        ]);
    }

    getPizzasSlowly(): Promise<Pizza[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getPizzas()), 0);
        });
    }
}