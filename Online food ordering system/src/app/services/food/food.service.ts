import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():String[]{
    return[
      '/assets/images/foods/food-1.jpg',
      '/assets/images/foods/food-3.jpg',
      '/assets/images/foods/food-4.jpg',
      '/assets/images/foods/food-6.jpg',
      '/assets/images/foods/food-7.jpg',
      '/assets/images/foods/food-8.jpg',
      '/assets/images/foods/food-9.jpg',
      

    ]
  }
}
