import { Component } from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {SwissArmyKnife} from "nativescript-swiss-army-knife/nativescript-swiss-army-knife";
import { UserService } from './shared/index';

@Component({
    moduleId: module.id,
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `<page-router-outlet></page-router-outlet>`,
    viewProviders: [SwissArmyKnife, UserService]
})
export class AppComponent {
    
    constructor( ) { }

    
 }