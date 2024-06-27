import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPPipe } from './search-p.pipe';
import { Header1Component } from './layout/header1/header1.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ListdynComponent } from './listdyn/listdyn.component';
import { Header2Component } from './layout/header2/header2.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';
import { Header3Component } from './layout/header3/header3.component';
import { HOME1Component } from './home1/home1.component';
import { Sidebar1Component } from './layout/sidebar1/sidebar1.component';
import { ListeformationsComponent } from './etudiant/listeformations/listeformations.component';
import { DetailComponent } from './etudiant/detail/detail.component';
import { FormationsinscrisComponent } from './etudiant/formationsinscris/formationsinscris.component';
import { ListeprogramesComponent } from './etudiant/listeprogrames/listeprogrames.component';
import { ListeinscripComponent } from './dashboard/listeinscrip/listeinscrip.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';
import { MsgrecuComponent } from './dashboard/msgrecu/msgrecu.component';
import { MsgenvoyComponent } from './dashboard/msgenvoy/msgenvoy.component';
import { TruncatePipe } from './truncate.pipe';
import { MsgrepondreComponent } from './dashboard/msgrepondre/msgrepondre.component';
import { EnvoyermsgComponent } from './etudiant/envoyermsg/envoyermsg.component';
import { AcceptesComponent } from './dashboard/acceptes/acceptes.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
    SidebarComponent,
  
    SearchPPipe,
    Header1Component,
    ChatbotComponent,
    LoginComponent,
    RegisterComponent,
    Header2Component,
    EtudiantComponent,
    HomeComponent,
    Header3Component,
    HOME1Component,
    Sidebar1Component,
    ListeformationsComponent,
    DetailComponent,
    FormationsinscrisComponent,
    ListeprogramesComponent,
    ListeinscripComponent,
    FormateurComponent,
    MsgrecuComponent,
    MsgenvoyComponent,
    TruncatePipe,
    MsgrepondreComponent,
    EnvoyermsgComponent,
    AcceptesComponent,
 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,FormsModule,
    HttpClientModule, NgxPaginationModule, BrowserAnimationsModule


  ],
  providers: [

    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
