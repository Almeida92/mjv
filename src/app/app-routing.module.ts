import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDataComponent } from './users/user-data/user-data.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-data/:id', component: UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
