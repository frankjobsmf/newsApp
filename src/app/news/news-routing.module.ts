import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { SportComponent } from './pages/sport/sport.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'technology', component: TechnologyComponent},
      { path: 'sport', component: SportComponent},
      { path: 'videogames', component: VideogamesComponent},
      { path: 'cinema', component: CinemaComponent},
      {path: '**', redirectTo: 'technology' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
