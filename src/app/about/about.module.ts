import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component'

import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [AboutComponent],
  providers: []
})
export class AboutModule {}
