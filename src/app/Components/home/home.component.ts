import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuario: string = 'Jhoel Dioses!';
  mostrarConfiguraciones: boolean = true;
  mostrarAlerta: boolean = true;

  toggleConfiguraciones() {
    this.mostrarConfiguraciones = !this.mostrarConfiguraciones;
  }

  closeAlert() {
    this.mostrarAlerta = false;
  }
}