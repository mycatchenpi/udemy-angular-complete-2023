import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  // 这里设置pathMatch: 'full',因为默认是’prefix'，所有的页面都会被redirecto home页面
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ]},
  { path: 'servers', canActivate: [ AuthGuard ],component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ]},
  { path: 'not-found', component: NotFoundComponent },
  //这里放在最后，如果放在前面，代码按顺序执行，所有的页面都会被redirect notFoundPage
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
