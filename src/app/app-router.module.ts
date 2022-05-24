import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBasicsComponent } from './sales/pages/page-basics/page-basics.component';
import { PageNonCommonComponent } from './sales/pages/page-non-commnon/page-non-common.component';
import { PageNumbersComponent } from './sales/pages/page-numbers/page-numbers.component';
import { PageSortingComponent } from './sales/pages/page-sorting/page-sorting.component';

const routes: Routes = [
  {
    path: '',
    component: PageBasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'non-common',
    component: PageNonCommonComponent,
  },
  {
    path: 'numbers',
    component: PageNumbersComponent,
  },
  {
    path: 'sorting',
    component: PageSortingComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
