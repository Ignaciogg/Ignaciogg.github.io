import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { SobremiComponent } from './views/sobremi/sobremi.component';
import { TimelineComponent } from './componentes/timeline/timeline.component';
import { ProjectCardComponent } from './componentes/project-card/project-card.component';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    ProyectosComponent,
    ContactoComponent,
    SobremiComponent,
    TimelineComponent,
    ProjectCardComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
