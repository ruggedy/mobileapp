import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild, Inject  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

import { View } from 'ui/core/view';
import { RadSideDrawer } from 'nativescript-telerik-ui/sidedrawer';
import { Page} from 'ui/page';
import { ActionItem } from 'ui/action-bar';
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
import * as ObservableModule from 'data/observable';
import { RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui/sidedrawer/angular';
import { TNSFontIconPipe, TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
	moduleId: module.id,
	selector: 'rest-list',
	templateUrl: 'restaurantList.html',
	styleUrls: ['restaurantList-common.css', 'restaurantList.css'],
	directives: [NS_ROUTER_DIRECTIVES],
	pipes: [TNSFontIconPipe]
})
export class RestaurantListComponent extends ObservableModule.Observable  implements OnInit, AfterViewInit{
	drawerOpen: boolean = false;
	constructor(@Inject(Page) private page: Page, private _changeDetectionRef: ChangeDetectorRef, private fonticon: TNSFontIconService) {
		super();
	 }

	@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

	 ngAfterViewInit(){
		 this.drawer = this.drawerComponent.sideDrawer;
		 this._changeDetectionRef.detectChanges();
	 }
	 ngOnInit(){

	 }

	 public openDrawer(){
		 this.drawer.showDrawer();
		 this.drawerOpen = true;
	 }

	 public closeDrawer(){
		 this.drawer.closeDrawer();
		 this.drawerOpen = false;
	 }

}