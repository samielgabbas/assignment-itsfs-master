import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetService } from "src/app/services/pet.service";
import { OrderComponent } from './order/order.component';
import {AppRoutingModule} from "./app-routing.module";
import { StoreComponent } from './store/store.component';
import {OrderService} from "./services/order.service";
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LoginComponent } from './login/login.component';
import {AuthGard} from "./guards/AuthGard";
import {AddHeaderInterceptor} from "./services/addHeaderInterceptor";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    PetAddComponent,
    OrderComponent,
    StoreComponent,
    OrderDetailComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PetService,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
