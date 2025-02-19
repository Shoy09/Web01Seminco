import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-opciones-dialog',
  templateUrl: './opciones-dialog.component.html',
  styleUrls: ['./opciones-dialog.component.css']
})
export class OpcionesDialogComponent {
  constructor(public dialogRef: MatDialogRef<OpcionesDialogComponent>) {}

  seleccionar(opcion: string) {
    this.dialogRef.close(opcion);
  }
}