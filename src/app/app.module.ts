import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { APP_SIDEBAR_NAV } from './sidebar/sidebar.component';
import { NAV_DROPDOWN_DIRECTIVES } from './directive/nav-dropdown-toggle.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './directive/sidebar.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ClientManageComponent } from './client-manage/client-manage.component';
import { ArchitectManageComponent } from './architect-manage/architect-manage.component';
import { SiteManageComponent } from './site-manage/site-manage.component';
import { QuatationManageComponent } from './quatation-manage/quatation-manage.component';
import { OrganizationManageComponent } from './organization-manage/organization-manage.component';
import { GridComponent } from './tools/grid/grid.component';
import { GridcolumnComponent } from './tools/gridcolumn/gridcolumn.component';
import { PagerService } from './service/pager.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ContainerComponent,
    APP_SIDEBAR_NAV,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    ClientManageComponent,
    ArchitectManageComponent,
    SiteManageComponent,
    QuatationManageComponent,
    OrganizationManageComponent,
    GridComponent,
    GridcolumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
