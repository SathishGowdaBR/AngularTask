import { Component, OnInit } from '@angular/core';
import { CategoriesList } from '../shared/Categoriesitem.model';
import { Subscription } from 'rxjs';
import { SettingserviceService } from '../shared/settingservice.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  ingredients: CategoriesList[];
  private subscription: Subscription;
  constructor(private slService:SettingserviceService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: CategoriesList[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  Ondeleteitem(i:number,ingt){
    if(confirm("Are you sure to delete "+ingt)) {
         this.slService.deleteIngredient(i);
    }
  }

}
