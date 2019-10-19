import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { RegistroContainerComponent } from './pages/registro/registro-container/registro-container.component';
import { LoginContainerComponent } from './pages/login/login-container/login-container.component';
import { HomeAlumnoComponent } from './pages/home-alumno/home-alumno.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeProfesorComponent } from './pages/home-profesor/home-profesor.component';
import { AltaMateriaContainerComponent } from './pages/alta-materia/alta-materia-container/alta-materia-container.component';
// tslint:disable-next-line: max-line-length
import { ModificarMateriaContainerComponent } from './pages/modificar-materia/modificar-materia-container/modificar-materia-container.component';
// tslint:disable-next-line: max-line-length
import { ListadoUsuariosContainerComponent } from './pages/listado-usuarios/listado-usuarios-container/listado-usuarios-container.component';
import { InscripcionContainerComponent } from './pages/inscripcion/inscripcion-container/inscripcion-container.component';
import { ListadoAlumnosContainerComponent } from './pages/listado-alumnos/listado-alumnos-container/listado-alumnos-container.component';
import { MensajesContainerComponent } from './pages/mensajes/mensajes-container/mensajes-container.component';

// Guards
import { LoggedGuard } from './guards/logged/logged.guard';
import { AlumnoGuard } from './guards/alumno/alumno.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { ProfesorGuard } from './guards/profesor/profesor.guard';
import { AlumnoProfesorGuard } from './guards/alumnoProfesor/alumno-profesor.guard';

const routes: Routes = [
  { path: 'registro', component: RegistroContainerComponent },
  { path: 'login', component: LoginContainerComponent },
  { path: 'home-alumno', component: HomeAlumnoComponent, canActivate: [LoggedGuard, AlumnoGuard] },
  { path: 'inscripcion', component: InscripcionContainerComponent, canActivate: [LoggedGuard, AlumnoGuard] },
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'alta-materia', component: AltaMateriaContainerComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'modificar-materia/:id', component: ModificarMateriaContainerComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'listado-usuarios', component: ListadoUsuariosContainerComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'home-profesor', component: HomeProfesorComponent, canActivate: [LoggedGuard, ProfesorGuard] },
  { path: 'listado-alumnos', component: ListadoAlumnosContainerComponent, canActivate: [LoggedGuard, ProfesorGuard] },
  { path: 'mensajes/:profesor/:alumno', component: MensajesContainerComponent, canActivate: [LoggedGuard, AlumnoProfesorGuard] },
  { path: '', redirectTo: '/home-alumno', pathMatch: 'full' },
  { path: '**', redirectTo: '/home-alumno', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
