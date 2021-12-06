import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { TalkbusinessComponent } from './talkbusiness/talkbusiness.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    ProjectComponent,
    AboutComponent,
    TalkbusinessComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
