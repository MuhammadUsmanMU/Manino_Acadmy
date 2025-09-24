import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalSettingsComponent } from './global-settings.component';


const routes: Routes = [
  {
    path: '',
    component: GlobalSettingsComponent,
    children: [
      // Global settings components if needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalSettingsRoutingModule {}
