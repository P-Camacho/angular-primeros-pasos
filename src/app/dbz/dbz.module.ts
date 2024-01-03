import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DBZMainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    DBZMainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
