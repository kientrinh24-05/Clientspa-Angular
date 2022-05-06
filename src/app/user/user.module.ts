import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent, UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,  
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path:'',
            redirectTo: 'home',
          },
          {
            path:'home',
            component:HomeComponent
          }
        ]
      }
    ])
  ]
})
export class UserModule { }
