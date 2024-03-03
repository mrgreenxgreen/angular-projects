import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {   
        path:"main",
        component:MainComponent,
        children:[
                {
                    path:"home",
                    component:HomeComponent
                },
                {
                    path:"gallery",
                    component:GalleryComponent
                },
        ]
    },
    {   
        path:"auth",
        component:AuthComponent,
        children:[
            {
                path:"login",
                component:LoginComponent
            },
            {
                path:"register",
                component:RegisterComponent
            },

        ]
    }
];
