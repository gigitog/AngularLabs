import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CardsComponent } from './cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { TableComponent } from './table/table.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    ProgressBarComponent,
    CardsComponent,
    AccordionComponent,
    TableComponent,
    TimepickerComponent,
    DatepickerComponent,
    ReactiveFormComponent,
    OrdersComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
