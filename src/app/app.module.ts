import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// Set locales
import { registerLocaleData } from '@angular/common';
import localEsCO from '@angular/common/locales/es-CO';
import localEsHN from '@angular/common/locales/es-HN';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localEsCO);
registerLocaleData(localEsHN);
registerLocaleData(localFr);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, SalesModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
