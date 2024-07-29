import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from "./pages/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { initFlowbite } from 'flowbite';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { BibliografiaComponent } from './pages/bibliografia/bibliografia.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactosComponent,
    HabilidadesComponent,
    CurriculumComponent,
    BibliografiaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
  ngOnInit(): void {
    initFlowbite();
  }
}
