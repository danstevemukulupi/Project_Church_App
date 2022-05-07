import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
 
 
 
  {
    path: 'prayers',
    loadChildren: () => import('./prayers/prayers.module').then( m => m.PrayersPageModule)
  },
  {
    path: 'formation',
    loadChildren: () => import('./formation/formation.module').then( m => m.FormationPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'yesumakambu',
    loadChildren: () => import('./yesumakambu/yesumakambu.module').then( m => m.YesumakambuPageModule)
  },
  {
    path: 'daily',
    loadChildren: () => import('./daily/daily.module').then( m => m.DailyPageModule)
  },
  {
    path: 'ministry',
    loadChildren: () => import('./ministry/ministry.module').then( m => m.MinistryPageModule)
  },
  {
    path: 'bibles',
    loadChildren: () => import('./bibles/bibles.module').then( m => m.BiblesPageModule)
  },
  {
    path: 'meditation',
    loadChildren: () => import('./meditation/meditation.module').then( m => m.MeditationPageModule)
  },
  {
    path: 'healing',
    loadChildren: () => import('./healing/healing.module').then( m => m.HealingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
