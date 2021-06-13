import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';
import { PropertyExampleComponent } from './property-example/property-example.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationExampleComponent,
    PropertyExampleComponent,
    TwoWayBindingExampleComponent,
    EventBindingExampleComponent,
    ProfileComponent,
    HomepageComponent,
    BuiltInDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, InterpolationExampleComponent, PropertyExampleComponent, TwoWayBindingExampleComponent,
     EventBindingExampleComponent, ProfileComponent, HomepageComponent, BuiltInDirectivesComponent]
})
export class AppModule { }
