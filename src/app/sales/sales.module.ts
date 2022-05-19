import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBasicsComponent } from './pages/page-basics/page-basics.component';
import { PageNonCommnonComponent } from './pages/page-non-commnon/page-non-commnon.component';
import { PageNumbersComponent } from './pages/page-numbers/page-numbers.component';
import { PageSortingComponent } from './pages/page-sorting/page-sorting.component';

@NgModule({
  declarations: [
    PageBasicsComponent,
    PageNonCommnonComponent,
    PageNumbersComponent,
    PageSortingComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageBasicsComponent,
    PageNonCommnonComponent,
    PageNumbersComponent,
    PageSortingComponent,
  ],
})
export class SalesModule {}
