import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importación de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { HomeComponent } from './Components/home/home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { MatDialogModule } from '@angular/material/dialog';
import { EstadosComponent } from './Components/estados/estados.component';
import { EstadoFormComponent } from './Components/estado-form/estado-form.component';
import { AuthInterceptor } from './Components/services/auth-interceptor.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EstadoFormEditarComponent } from './Components/estado-form-editar/estado-form-editar.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { OpcionesDialogComponent } from './Components/opciones-dialog/opciones-dialog.component';
import { LoadingDialogComponent } from './Components/loading-dialog/loading-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PrincipalComponent,
    HomeComponent,
    EstadosComponent,
    EstadoFormComponent,
    EstadoFormEditarComponent,
    ConfirmDialogComponent,
    OpcionesDialogComponent,
    LoadingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Módulos de Angular Material
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
