// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui/sidedrawer/angular";
import {LISTVIEW_PROVIDERS} from "nativescript-telerik-ui/listview/angular";
import {AppComponent} from "./app.component";
import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import { setStatusBarColors } from './utils';
import {RouterOutletMap} from '@angular/router';
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
import { UserService} from './shared/index';

setStatusBarColors();

nativeScriptBootstrap(AppComponent, [ SIDEDRAWER_PROVIDERS, LISTVIEW_PROVIDERS, APP_ROUTER_PROVIDERS,
	RouterOutletMap,
	NS_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(TNSFontIconService, {
		useFactory: () => {
			return new TNSFontIconService({
				'fa': 'font-awesome.css'
			});
		}
	})
]);