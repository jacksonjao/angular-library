import {NgModule} from '@angular/core';
import {JacksonjaoButtonsComponent} from './jacksonjao-buttons.component';
import {BasicButtonComponent} from './basic-button/basic-button.component';
import {CircleButtonComponent} from './circle-button/circle-button.component';
import {SanitizationStylePipe} from './pipes/sanitization-style.pipe';
import {ColorDirective} from './directives/color.directive';


@NgModule({
  declarations: [JacksonjaoButtonsComponent, BasicButtonComponent, CircleButtonComponent, SanitizationStylePipe, ColorDirective],
  imports: [],
  exports: [BasicButtonComponent, CircleButtonComponent, ColorDirective]
})
export class JacksonjaoButtonsModule {
}
