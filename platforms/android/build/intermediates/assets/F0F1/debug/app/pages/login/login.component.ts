import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import { SwissArmyKnife } from 'nativescript-swiss-army-knife/nativescript-swiss-army-knife';
import { UserService, User } from '../../shared/index';



@Component({
	moduleId: module.id,
    selector: "my-login",
    templateUrl: "login.html",
    styleUrls: ["login-common.css", "login.css"],
	providers: [HTTP_PROVIDERS]
})
export class LoginComponent implements OnInit {

	user: User;
	width: any;
	height: any;
    isLoggedIn = true;

	@ViewChild("container")container: ElementRef; 
	@ViewChild("email")email: ElementRef; 
	@ViewChild("password")password: ElementRef; 

    constructor(private _router: Router,  private page:Page, private _userService:UserService) {
        this.user = new User();
    }



    toggleDisplay() {
        this.isLoggedIn = !this.isLoggedIn;
		let container = <View>this.container.nativeElement;
		container.animate({
			backgroundColor: this.isLoggedIn? new Color("White") : new Color("#301217"),
			duration: 200
		});
    }

	login(){
		console.log(this.user.email);
		if (!this.user.isValidEmail()){
			alert("Enter a valid email address");
			return
		}

		this._userService.signin(this.user);

		this._router.navigate(['/menu']);

		
	}

	signUp(){
		if (!this.user.isValidEmail()){
			alert("Enter a valid email address");
			return
		}

		this._userService.signup(this.user)
			this._router.navigate(["/home"])
	}

	ngOnInit(){
		this.page.actionBarHidden = true;
		this.page.backgroundColor = new Color("green");
		this.width = SwissArmyKnife.getScreenHeight().landscape;
		this.height = SwissArmyKnife.getScreenHeight().portrait;
	}
}