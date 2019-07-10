import { Component, OnInit } from '@angular/core';
import { SettingserviceService } from '../shared/settingservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  config: any;
  collection = { count: 60, data: [] };
	dataSource: any;
  type: string;
  width: string;
  height: string;
  isEditable = false;
  Isupdate = true;
  constructor(private slService:SettingserviceService) {
   var sa=slService.getIngredients()
    console.log(sa.length);
      this.collection = { count: sa.length, data: [] };
    this.type = 'timeseries';
    this.width = '400';
    this.height = '400';
    for (var i = 0; i < this.collection.count; i++) {
      console.log(sa[i]);      
      this.collection.data.push(
        {
          id: i + 1,
          value: sa[i]
        }
      );
    }
 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
   }
  pageChanged(event){
    this.config.currentPage = event;
  }
  editingt(i,item){
    this.isEditable = true;
  }
  adddata(){
    this.isEditable = true;
  }
  updateingt(){
   return this.Isupdate=false;
  }
}
