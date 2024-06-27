import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoGuard } from './autho.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { ListdynComponent } from './listdyn/listdyn.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';
import { ListeformationsComponent } from './etudiant/listeformations/listeformations.component';
import { DetailComponent } from './etudiant/detail/detail.component';
import { FormationsinscrisComponent } from './etudiant/formationsinscris/formationsinscris.component';
import { ListeprogramesComponent } from './etudiant/listeprogrames/listeprogrames.component';
import { ListeinscripComponent } from './dashboard/listeinscrip/listeinscrip.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';
import { MsgrecuComponent } from './dashboard/msgrecu/msgrecu.component';
import { MsgenvoyComponent } from './dashboard/msgenvoy/msgenvoy.component';
import { MsgrepondreComponent } from './dashboard/msgrepondre/msgrepondre.component';
import { EnvoyermsgComponent } from './etudiant/envoyermsg/envoyermsg.component';
import { ListeacceptesComponent } from './dashboard/listeacceptes/listeacceptes.component';
import { AcceptesComponent } from './dashboard/acceptes/acceptes.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:'',redirectTo:'/home1', pathMatch:'full'},
{path:'home1',component:HomeComponent},
{path:'admin',component:DashboardComponent, children:[
  {path:'attente',component:ListeinscripComponent},
  {path:'acceptes',component:AcceptesComponent},
  {path:'formateur', component:FormateurComponent},
  {path:'msgrecu', component:MsgrecuComponent},
  {path:'msgenv', component:MsgenvoyComponent},
  {path:'repondre/:id', component:MsgrepondreComponent}
]},
  

  
 


{path:'etudiant',component:EtudiantComponent, children:[

  {path:'',redirectTo:'formations', pathMatch:'full'},
  {path:'formations', component:ListeformationsComponent},
  {path:'detail/:id', component:DetailComponent},
  {path:'inscris', component:FormationsinscrisComponent},
  {path:'programes',component:ListeprogramesComponent},
  {path:'envoyermsg', component:EnvoyermsgComponent}

]},


{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
