import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {LoginComponent} from "./pages";
import {MenuComponent} from "./pages";
import { RestaurantListComponent } from './pages'

export const routes: RouterConfig = [
	{ path: "", component: LoginComponent },
	{ path: 'home', component: RestaurantListComponent},
	{ path: "menu", component: MenuComponent },
];

export const APP_ROUTER_PROVIDERS = [
	nsProvideRouter(routes, {})
];