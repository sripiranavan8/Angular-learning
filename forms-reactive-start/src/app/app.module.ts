import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { RouterModule, Routes } from '@angular/router';
import { ExcersiseComponent } from './excersise/excersise.component';

const appRoutes: Routes = [
  { path: '', component: LearningComponent },
  { path: 'excersise', component: ExcersiseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    ExcersiseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
