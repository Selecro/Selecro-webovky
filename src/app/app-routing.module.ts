import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VyukovymodComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pages/pomucky/pomucky.component';
import { NavodyComponent } from './pages/navody/navody.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vyukovymod', component: VyukovymodComponent },
  { path: 'slovnik', component: SlovnikComponent },
  { path: 'pomucky', component: PomuckyComponent },
  { path: 'navody', component: NavodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
