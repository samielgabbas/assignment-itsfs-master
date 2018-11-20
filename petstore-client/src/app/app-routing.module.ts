import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./order/order.component";
import {StoreComponent} from "./store/store.component";
import {LoginComponent} from "./login/login.component";
import {AuthGard} from "./guards/AuthGard";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home', canActivateChild: [AuthGard], component: HeaderComponent,
    children: [
      {path: 'orders', component: OrderComponent},
      {path: 'store', component: StoreComponent}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard]
})
export class AppRoutingModule {

}
