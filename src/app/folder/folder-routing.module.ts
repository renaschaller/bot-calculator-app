import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'informationen',
    loadChildren: () => import('./informationen/informationen.module').then( m => m.InformationenPageModule)
  },
  {
    path: 'toleranzen',
    loadChildren: () => import('./toleranzen/toleranzen.module').then( m => m.ToleranzenPageModule)
  },
  {
    path: 'zeiterfassung',
    loadChildren: () => import('./zeiterfassung/zeiterfassung.module').then( m => m.ZeiterfassungPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
