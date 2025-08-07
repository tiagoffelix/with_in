import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { TeamComponent } from '../components/team/team.component';
import { ServicesComponent } from '../components/services/services.component';
import { TestemunhosComponent } from '../components/testemunhos/testemunhos.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HeaderComponent,
    HeroComponent,
    TeamComponent,
    ServicesComponent,
    TestemunhosComponent,
    ContactComponent,
    FooterComponent
  ],
  providers: [
    { provide: APP_ID, useValue: 'with-in' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add support for custom elements
  bootstrap: [AppComponent]
})
export class AppModule {}