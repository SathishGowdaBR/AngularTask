import { Injectable } from '@angular/core';
import { CategoriesList } from '../shared/Categoriesitem.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingserviceService {
  ingredientsChanged = new Subject<CategoriesList[]>();
  private categoriesItem: CategoriesList[] = [
    new CategoriesList('Grocery','Bread', 40,'23/04/2019'),
    new CategoriesList('Grocery','Milk', 20,'24/04/2019'),
    new CategoriesList('Itemname1','Itemname1', 10,'24/06/2019'),
    new CategoriesList('Itemname2','Itemname2', 30,'08/07/2019'),
    new CategoriesList('Itemname3','Itemname3', 40,'09/07/2019'),
    new CategoriesList('Itemname4','Itemname4', 50,'09/07/2019'),
  ];
  constructor() { }

  getIngredients() {
    return this.categoriesItem.slice();
  }

  getIngredient(index: number) {
    return this.categoriesItem[index];
  }

  addIngredient(ingredient: CategoriesList) {
    this.categoriesItem.push(ingredient);
    this.ingredientsChanged.next(this.categoriesItem.slice());
  }

  addIngredients(ingredients: CategoriesList[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.categoriesItem.push(...ingredients);
    this.ingredientsChanged.next(this.categoriesItem.slice());
  }

  updateIngredient(index: number, newIngredient: CategoriesList) {
    this.categoriesItem[index] = newIngredient;
    this.ingredientsChanged.next(this.categoriesItem.slice());
  }

  deleteIngredient(index: number) {
    this.categoriesItem.splice(index, 1);
    this.ingredientsChanged.next(this.categoriesItem.slice());
  }
}
