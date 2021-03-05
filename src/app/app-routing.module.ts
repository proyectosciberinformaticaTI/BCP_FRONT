import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipoCambioComponent} from './pages/tipo-cambio/tipo-cambio.component';
import {TipoCambioEdicionComponent} from './pages/tipo-cambio/tipo-cambio-edicion/tipo-cambio-edicion.component';

const routes: Routes = [
  { path: 'tipo-cambio', component: TipoCambioComponent, children: [
      { path: 'edicion/:id', component: TipoCambioEdicionComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
