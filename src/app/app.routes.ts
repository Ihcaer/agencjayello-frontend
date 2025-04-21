import { Routes } from '@angular/router';
import { MainComponent } from '@main/views/main/main.component';

export const routes: Routes = [
   {
      path: '', component: MainComponent, children: [
         {
            path: '',
            loadComponent: () => import('./main/views/main/home/home.component').then(m => m.HomeComponent)
         }
      ]
   }
];
