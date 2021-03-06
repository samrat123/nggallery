import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationComponent } from './validation/validation.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'validation', component: ValidationComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports:[RouterModule.forRoot(
      appRoutes 
    ) 
  ]
})

export class AppRoutingModule {}