import { Routes } from '@angular/router';
import { HomeComponent } from '@main/views/main/home/home.component';
import { MainComponent } from '@main/views/main/main.component';

export const routes: Routes = [
   {
      path: '', component: MainComponent, children: [
         { path: '', component: HomeComponent }
      ]
   }
];
