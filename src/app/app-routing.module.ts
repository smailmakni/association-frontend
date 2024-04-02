import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { AdminComponent } from './Component/admin/admin.component';
import { AgencyComponent } from './Component/agency/agency.component';
import { AttributionComponent } from './Component/attribution/attribution.component';
import { CenterComponent } from './Component/center/center.component';
import { DocumentComponent } from './Component/document/document.component';
import { EquipmentComponent } from './Component/equipment/equipment.component';
import { InterventionComponent } from './Component/intervention/intervention.component';
import { UserComponent } from './Component/user/user.component';

const routes: Routes = [
  {path:"login", component : LoginComponent},
  {path:"", redirectTo : "/login", pathMatch : "full"},
  {path:"admin", component : AdminComponent},
  {path:"agency", component : AgencyComponent},
  {path:"attribution", component : AttributionComponent},
  {path:"center", component : CenterComponent},
  {path:"document", component : DocumentComponent},
  {path:"equipment", component : EquipmentComponent},
  {path:"intervention", component : InterventionComponent},
  {path:"user", component : UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
