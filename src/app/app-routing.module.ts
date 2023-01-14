import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UppercaseComponent } from './views/uppercase/uppercase/uppercase.component';
import { UsercomponentComponent } from './views/usercomponent/usercomponent.component';

const routes: Routes = [
  {path: 'uppercase',
  component: UppercaseComponent,
  data: {
    title: 'uppercase'
  }
},
{path: 'usercomponent',
  component: UsercomponentComponent,
  data: {
    title: 'Usercomponent'
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
