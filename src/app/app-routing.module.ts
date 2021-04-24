import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

    {
    path:  'Console/Add',
    component:  AddComponent
    },
    {
    path:  'Console/Delete',
    component:  DeleteComponent
    },
    {
    path:  'Console/Update',
    component:  UpdateComponent
    },
    {
      path: '',
      redirectTo: 'Console/Add',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
