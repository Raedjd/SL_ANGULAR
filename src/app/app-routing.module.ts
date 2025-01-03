import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dasboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
