import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  menuItems: MenuItems[] = [

    {
      path: '/news/technology',
      name: 'Tecnología'
    },
    {
      path: '/news/sport',
      name: 'Deportes'
    },
    {
      path: '/news/videogames',
      name: 'Vídeo juegos'
    },
    {
      path: '/news/cinema',
      name: 'Cine'
    },

  ];

}
