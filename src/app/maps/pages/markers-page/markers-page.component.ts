import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerandColor {
  color: string;
  marker: Marker
}

interface PlainMarker {
  color: string;
  lngLat: number[]
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})


export class MarkersPageComponent {

  

  @ViewChild('map') divMap?: ElementRef;

  public currentMarker: MarkerandColor[] = []
  public zoom: number = 6;
  public map?: Map;
  public currentLngLat : LngLat = new LngLat(-83.753428, 9.748917)


  ngAfterViewInit(): void {

    if( !this.divMap) throw 'El elemento HTML no fue encontrado'

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
      });

      this.readFromLocalStorage();
      
      // const marker = new Marker({
      //   //color: 'pink'
      // })
      //   .setLngLat( this.currentLngLat)
      //   .addTo( this.map)

      // const markerHtml = document.createElement('div');
      // markerHtml.innerHTML = 'Steven Marker'
  } 


  createMarker(){
    if(!this.map) return

    const color ='#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lgnLat = this.map.getCenter()
    this.addMarker(lgnLat, color)
  }

  deleteMarker(index: number){
    
    this.currentMarker[index].marker.remove();
    this.currentMarker.splice(index, 1)
  }

  flyto( marker: Marker){

    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })

  }


  addMarker(lngLat: LngLat, color: string){
    if(!this.map) return

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat( lngLat)
    .addTo(this.map)  

    this.currentMarker.push( {
      color: color,
      marker: marker})
      this.saveToLocalStorage()
    
    marker.on('dragend', ()=>{
      this.saveToLocalStorage()
    })
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.currentMarker.map( ({ color, marker }) => {
      
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    } )
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers))
  } 

  readFromLocalStorage(){
    const plainMarkerString = localStorage.getItem('plainMarkers') ?? ' [] '
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkerString)
    
    plainMarkers.forEach( ({ color, lngLat}) => {
      const [ lng, lat] = lngLat; 
      const coords = new LngLat( lng, lat);

      this.addMarker(coords, color)
    })
  }


}
