import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Component/admin/admin.component';
import { AgencyComponent } from './Component/agency/agency.component';
import { CenterComponent } from './Component/center/center.component';
import { DocumentComponent } from './Component/document/document.component';
import { AttributionComponent } from './Component/attribution/attribution.component';
import { EquipmentComponent } from './Component/equipment/equipment.component';
import { InterventionComponent } from './Component/intervention/intervention.component';
import { UserComponent } from './Component/user/user.component';
import { LoginComponent } from './Component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Component/admin/register/register.component';
import { NavbarComponent } from './Component/navigation/navbar/navbar.component';
import { SidebarComponent } from './Component/navigation/sidebar/sidebar.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AgencyComponent,
    CenterComponent,
    DocumentComponent,
    AttributionComponent,
    EquipmentComponent,
    InterventionComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPagination
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
