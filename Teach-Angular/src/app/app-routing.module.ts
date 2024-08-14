import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
  {
    path: 'material',
    component: MaterialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
