import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplatesComponent } from './templates/templates.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildContainerComponent } from './child-container/child-container.component';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { NgTemplateExampleComponent } from './ng-template-example/ng-template-example.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PointToComaPipe } from './custom-pipe/space-to-underline.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    TemplatesComponent,
    ParentComponent,
    ChildComponent,
    ChildContainerComponent,
    ParentContainerComponent,
    NgTemplateExampleComponent,
    ViewChildExampleComponent,
    CustomPipeComponent,
    PointToComaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
