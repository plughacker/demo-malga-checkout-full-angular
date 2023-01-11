import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MalgaCheckoutModule } from "@malga-checkout-full/angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MalgaCheckoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
