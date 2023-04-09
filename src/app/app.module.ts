import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/enviroment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ReviewComponent } from './pages/review/review.component';
import { TableModule } from 'primeng/table';
import { ComingSoonPageComponent } from './components/coming-soon-page/coming-soon-page.component';
import { TrainingComponent } from './pages/training/training.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    FooterComponent,
    ReviewComponent,
    ComingSoonPageComponent,
    TrainingComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    AccordionModule,
    CardModule,
    DividerModule,
    CarouselModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
