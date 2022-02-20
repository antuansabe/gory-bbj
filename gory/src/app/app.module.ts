import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InformationSectionComponent } from './componentes/information-section/information-section.component';
import { GalerySectionComponent } from './componentes/galery-section/galery-section.component';
import { PlanesPreciosComponent } from './componentes/planes-precios/planes-precios.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationSectionComponent,
    GalerySectionComponent,
    PlanesPreciosComponent,
    ProfesoresComponent,
    ContactanosComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
