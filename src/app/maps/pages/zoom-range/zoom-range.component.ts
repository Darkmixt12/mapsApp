import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit {


  
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;


  ngAfterViewInit(): void {

    if( !this.divMap) throw 'El elemento HTML no fue encontrado'

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: [-83.753428, 9.748917], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners()
  } 

  mapListeners() {
    if (!this.map) throw "Mapa no Inicializado"

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomed', (ev)=> {
      if (this.map!.getZoom() < 18 ) return;

      this.zoom = this.map!.getZoom();
    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom =  Number(value);
    this.map?.zoomTo(value)
  }


}
