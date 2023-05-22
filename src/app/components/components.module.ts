import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ItemsComponent } from './menu/items/items.component';
import { SearchComponent } from './search/search.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './grid/images/images.component';



@NgModule({
  declarations: [
    MenuComponent,
    ItemsComponent,
    SearchComponent,
    GridComponent,
    HomeComponent,
    ImagesComponent
  ],
  exports:[
    MenuComponent,
    SearchComponent,
    GridComponent,
    HomeComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
