import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerComponent } from './container/container.component';
import { ClientManageComponent } from './client-manage/client-manage.component';
import { ArchitectManageComponent } from './architect-manage/architect-manage.component';
import { SiteManageComponent } from './site-manage/site-manage.component';
import { QuatationManageComponent } from './quatation-manage/quatation-manage.component';
import { OrganizationManageComponent } from './organization-manage/organization-manage.component';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'app', data: {
      title: 'Home'
    }, component: ContainerComponent, children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'user/client',
        component: ClientManageComponent
      }, {
        path: 'user/architect',
        component: ArchitectManageComponent
      }, {
        path: 'work/site',
        component: SiteManageComponent
      }, {
        path: 'work/quatation',
        component: QuatationManageComponent
      }, {
        path: 'manage/organization',
        component: OrganizationManageComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
