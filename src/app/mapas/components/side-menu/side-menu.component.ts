import { Component } from '@angular/core';

interface MenuItems{
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  menuItems: MenuItems[] = [
    {
      ruta: '/mapas/fullscreen', nombre: 'FullScreen'
    },
    {
      ruta: '/mapas/zoom-range', nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores', nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propiedades', nombre: 'Propiedades'
    }
  ]


}
