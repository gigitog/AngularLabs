import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { CardsComponent } from './cards/cards.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { OrdersComponent } from './orders/orders.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { TableComponent } from './table/table.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: 'slide-show', component: SlideShowComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'table', component: TableComponent },
  { path: 'timepicker', component: TimepickerComponent },
  { path: 'datepicker', component: DatepickerComponent},
  { path: 'form', component: ReactiveFormComponent },
  { path: 'datatable', component: OrdersComponent },
  { path: 'weather', component: WeatherComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [SlideShowComponent, ProgressBarComponent, TableComponent];
