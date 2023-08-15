import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDataComponent } from './users/user-data/user-data.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';


const routes: Routes = [
  { path: 'user-data/:id', component: UserDataComponent},
  { path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-data', component: UserDataComponent}
];

@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
