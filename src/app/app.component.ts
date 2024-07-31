import { Component, HostListener } from '@angular/core';
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
  styleUrls: ['./app.component.scss'] // Cambiado a 'styleUrls'
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  title = 'portafolio';

  ngOnInit(): void {
    initFlowbite();
    this.checkVisibility();
  }

  checkVisibility() {
    const sections = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight / 5 * 4; // 80% del viewport

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
}
