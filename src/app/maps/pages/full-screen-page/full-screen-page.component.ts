import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoidmljaW91c2xpZXMiLCJhIjoiY2xudGNwbnozMDI3MjJzbnhmMXphMzNoYyJ9.SWblGwAuYVwjF58YD0ARSA';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;




  ngAfterViewInit(): void {

    if( !this.divMap) throw 'El elemento HTML no fue encontrado'

    const map = new mapboxgl.Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: [-83.753428, 9.748917], // starting position [lng, lat]
      zoom: 6, // starting zoom
      });
  } 

}
