import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Admin/login/login.component';
import { RegisterComponent } from './Admin/register/register.component';
import { ResComponent } from './res/res.component';
import { InfoComponent } from './info/info.component';
import { ResdatasComponent } from './Admin/resdatas/resdatas.component';
import { ProfilComponent } from './Admin/profil/profil.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"admin/login", component:LoginComponent},
  {path:"admin/register", component:RegisterComponent},
  {path:"admin/res", component:ResdatasComponent},
  {path:"admin/profil", component:ProfilComponent},

  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'reservation', component:ResComponent},
  {path:'info', component:InfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
