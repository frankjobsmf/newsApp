import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { RouterModule } from '@angular/router';
import { TechnologyComponent } from './pages/technology/technology.component';
import { SportComponent } from './pages/sport/sport.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';
import { CinemaComponent } from './pages/cinema/cinema.component';


@NgModule({
  declarations: [
    TechnologyComponent,
    SportComponent,
    VideogamesComponent,
    CinemaComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule
  ]
})
export class NewsModule { }
