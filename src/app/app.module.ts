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

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { WebsiteComponent } from './website/website.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    ProjectComponent,
    AboutComponent,
    TalkbusinessComponent,
    ImprintComponent,   
    FooterComponent,
    MenuComponent,
    DataProtectionComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
