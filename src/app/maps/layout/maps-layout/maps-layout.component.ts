import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideItems {
  name: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-maps-layout', 
  templateUrl: './maps-layout.component.html',
  styleUrls: ['./maps-layout.component.css']
})
export class MapsLayoutComponent {



  public sidebarItems: SideItems[] = [{
    name: 'FullScreen', icon: 'label', route: '/maps/fullscreen'
  },
  {
    name: 'ZoomRange', icon: 'label', route: '/maps/zoom-range'
  },
  {
    name: 'Markers', icon: 'label', route: '/maps/markers'
  },
  {
    name: 'Puntos de Venta', icon: 'label', route: '/maps/properties'
  }
  ]

  constructor(
    private router: Router,
  
  ){

  }

}
