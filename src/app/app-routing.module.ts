import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {
    path: 'list',
    loadChildren: () => import('./list-task/list-task.module').then(m => m.ListTaskModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
