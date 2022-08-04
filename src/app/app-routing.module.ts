import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectComponent } from './project/project.component';
import { WebsiteComponent } from './website/website.component';
import { TalkbusinessComponent } from './talkbusiness/talkbusiness.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'talkbusiness', component: TalkbusinessComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
