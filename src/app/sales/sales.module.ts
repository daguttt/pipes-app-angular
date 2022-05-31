import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBasicsComponent } from './pages/page-basics/page-basics.component';
import { PageNonCommonComponent } from './pages/page-non-commnon/page-non-common.component';
import { PageNumbersComponent } from './pages/page-numbers/page-numbers.component';
import { PageSortingComponent } from './pages/page-sorting/page-sorting.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CustomUpperCasePipe } from './pipes/custom-uppercase.pipe';
import { FliesPipe } from './pipes/flies.pipe';

@NgModule({
  declarations: [
    PageBasicsComponent,
    PageNonCommonComponent,
    PageNumbersComponent,
    PageSortingComponent,
    CustomUpperCasePipe,
    FliesPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    PageBasicsComponent,
    PageNonCommonComponent,
    PageNumbersComponent,
    PageSortingComponent,
  ],
})
export class SalesModule {}
