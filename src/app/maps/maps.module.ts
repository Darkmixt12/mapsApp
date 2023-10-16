import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoidmljaW91c2xpZXMiLCJhIjoiY2xudGNwbnozMDI3MjJzbnhmMXphMzNoYyJ9.SWblGwAuYVwjF58YD0ARSA';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangeComponent,
    FullScreenPageComponent
    

    
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MaterialModule
  ]
})
export class MapsModule { }
