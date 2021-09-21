import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { UserComponent } from './module/user/user.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'user',
    component: UserComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
