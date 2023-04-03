import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressBarModule } from 'primeng/progressbar';
import { BootComponent } from './boot/boot.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { MachineControlsComponent } from './machine-controls/machine-controls.component';



@NgModule({
  declarations: [	
    AppComponent,
    BootComponent,
    LoginComponent,
    MachineControlsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
