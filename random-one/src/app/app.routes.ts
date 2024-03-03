import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { GalleryComponent } from './main/gallery/gallery.component';
export const routes: Routes = [
    {   
        path:"home",
        component:HomeComponent
    },
    {   
        path:"gallery",
        component:GalleryComponent
    }
];
