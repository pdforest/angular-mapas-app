import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItems{
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  menuItems: MenuItems[] = [
    {ruta: '/mapas/fullscreen', nombre: 'FullScreen'},
    {ruta: '/mapas/zoom-range', nombre: 'Zoom Range'},
    {ruta: '/mapas/marcadores', nombre: 'Marcadores'},
    {ruta: '/mapas/propiedades', nombre: 'Propiedades'},
    {ruta: '/alone', nombre: 'Alone'}
  ]


}
