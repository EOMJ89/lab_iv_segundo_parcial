import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios
import { AuthService } from './services/auth/auth.service';
import { FirebaseService } from './services/firebase/firebase.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

// Componentes
import { RegistroContainerComponent } from './pages/registro/registro-container/registro-container.component';
import { RegistroLazyComponent } from './pages/registro/registro-lazy/registro-lazy.component';
import { HomeAlumnoComponent } from './pages/home-alumno/home-alumno.component';
import { LoginContainerComponent } from './pages/login/login-container/login-container.component';
import { LoginLazyComponent } from './pages/login/login-lazy/login-lazy.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeProfesorComponent } from './pages/home-profesor/home-profesor.component';
import { AltaMateriaContainerComponent } from './pages/alta-materia/alta-materia-container/alta-materia-container.component';
import { AltaMateriaLazyComponent } from './pages/alta-materia/alta-materia-lazy/alta-materia-lazy.component';
// tslint:disable-next-line: max-line-length
import { ListadoMateriasContainerComponent } from './pages/listado-materias/listado-materias-container/listado-materias-container.component';
import { ListadoMateriasLazyComponent } from './pages/listado-materias/listado-materias-lazy/listado-materias-lazy.component';
// tslint:disable-next-line: max-line-length
import { ModificarMateriaContainerComponent } from './pages/modificar-materia/modificar-materia-container/modificar-materia-container.component';
import { ModificarMateriaLazyComponent } from './pages/modificar-materia/modificar-materia-lazy/modificar-materia-lazy.component';
// tslint:disable-next-line: max-line-length
import { ListadoUsuariosContainerComponent } from './pages/listado-usuarios/listado-usuarios-container/listado-usuarios-container.component';
import { ListadoUsuariosLazyComponent } from './pages/listado-usuarios/listado-usuarios-lazy/listado-usuarios-lazy.component';
// tslint:disable-next-line: max-line-length
import { ListadoMateriasAlumnoContainerComponent } from './pages/listado-materias-alumno/listado-materias-alumno-container/listado-materias-alumno-container.component';
import { InscripcionContainerComponent } from './pages/inscripcion/inscripcion-container/inscripcion-container.component';
import { InscripcionLazyComponent } from './pages/inscripcion/inscripcion-lazy/inscripcion-lazy.component';
// tslint:disable-next-line: max-line-length
import { ListadoMateriasAlumnoLazyComponent } from './pages/listado-materias-alumno/listado-materias-alumno-lazy/listado-materias-alumno-lazy.component';
// tslint:disable-next-line: max-line-length
import { ListadoMateriasProfesorContainerComponent } from './pages/listado-materias-profesor/listado-materias-profesor-container/listado-materias-profesor-container.component';
import { ListadoAlumnosContainerComponent } from './pages/listado-alumnos/listado-alumnos-container/listado-alumnos-container.component';
import { ListadoAlumnosLazyComponent } from './pages/listado-alumnos/listado-alumnos-lazy/listado-alumnos-lazy.component';
import { MensajesContainerComponent } from './pages/mensajes/mensajes-container/mensajes-container.component';
import { MensajesLazyComponent } from './pages/mensajes/mensajes-lazy/mensajes-lazy.component';

@NgModule({
  declarations: [
    AppComponent,

    // Componentes
    RegistroContainerComponent,
    RegistroLazyComponent,
    HomeAlumnoComponent,
    LoginContainerComponent,
    LoginLazyComponent,
    MenuComponent,
    HomeAdminComponent,
    HomeProfesorComponent,
    AltaMateriaContainerComponent,
    AltaMateriaLazyComponent,
    ListadoMateriasContainerComponent,
    ListadoMateriasLazyComponent,
    ModificarMateriaContainerComponent,
    ModificarMateriaLazyComponent,
    ListadoUsuariosContainerComponent,
    ListadoUsuariosLazyComponent,
    ListadoMateriasAlumnoContainerComponent,
    InscripcionContainerComponent,
    InscripcionLazyComponent,
    ListadoMateriasAlumnoLazyComponent,
    ListadoMateriasProfesorContainerComponent,
    ListadoAlumnosContainerComponent,
    ListadoAlumnosLazyComponent,
    MensajesContainerComponent,
    MensajesLazyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Firestore
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
    FirebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
