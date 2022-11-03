import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
 import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
