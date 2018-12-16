import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonService } from './button/button.service';
import { TooltipComponent } from './button/tooltip/tooltip.component';
import { ClickDirective } from './button/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TooltipComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
