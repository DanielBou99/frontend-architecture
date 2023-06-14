import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsListComponent } from './animals-list/animals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AnimalsListComponent, {
      injector: this.injector,
    });
    customElements.define('app-animals-list', element);
  }
}

