import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/models/Estado';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent {
  estadoForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private estadoService: EstadoService,
    public dialogRef: MatDialogRef<EstadoFormComponent>, // Referencia del diálogo
    @Inject(MAT_DIALOG_DATA) public data: any // Datos que puedes recibir al abrir el diálogo
  ) {
    this.estadoForm = this.fb.group({
      estado_principal: ['', Validators.required],
      codigo: ['', Validators.required],
      tipo_estado: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.estadoForm.valid) {
      const nuevoEstado: Estado = this.estadoForm.value;

      this.estadoService.createEstado(nuevoEstado).subscribe({
        next: (response) => {
          this.mensaje = 'Estado creado exitosamente!';
          this.estadoForm.reset();
          this.dialogRef.close(response); // Cierra el diálogo y devuelve el estado creado
        },
        error: (error) => {
          console.error('Error al crear el estado:', error);
          this.mensaje = 'Ocurrió un error al crear el estado.';
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin hacer nada
  }
}
