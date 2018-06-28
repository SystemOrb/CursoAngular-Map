import { Component } from '@angular/core';
import { Map } from '../../class/map.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MapDialogComponent } from './map-dialog.component';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat = 51.678418;
  lng = 7.809007;
  markers: Map[] = [];
constructor(private alertDinamic: MatSnackBar,
            public dialog: MatDialog) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
 }
createMarker(marker)
// tslint:disable-next-line:one-line
{
const MAP = new Map(marker.coords.lat, marker.coords.lng);
this.markers.push(MAP);
this.localMarkers();
this.alertDinamic.open('Has creado un nuevo marcador', 'Aceptar', {
  duration: 3000
});
}
deleteMarker(index: number) {
  this.markers.splice( index );
  this.localMarkers();
  this.alertDinamic.open('Has borrado un marcador', 'Aceptar', {
    duration: 3000
  });
}
editMarker(pointer: Map): void {
  const dialogRef = this.dialog.open( MapDialogComponent, {
    width: '250px',
    data: { name: pointer.title, desc: pointer.desc }
  });
  // GET OBJECT RESPONDE
  dialogRef.afterClosed().subscribe(result => {
    if ( !result ) {
      return;
    }
    pointer.title = result.title;
    pointer.desc = result.desc;
    this.localMarkers();
    this.alertDinamic.open('Marcador Actualizado', 'Aceptar',{
      duration: 3000
    });
  });
}

localMarkers() {
  localStorage.setItem('markers', JSON.stringify(this.markers));
}

}
