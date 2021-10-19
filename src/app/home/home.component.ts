import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    name: string;
    lastName: string;
    isDisabled: boolean;

    constructor(){
        this.name = '';
        this.lastName = '';
        this.isDisabled = false;
    }

    toggleSubmitBtn() {
        // console.log(event);
        console.log(`Changing to...${!this.isDisabled}`);
        this.isDisabled = !this.isDisabled;
    }

    updateName(event: Event) {
        console.log("Updating element");
        const element = event.target as HTMLInputElement;
        this.name = element.value;
    }

    printWelcome() {
        alert(`Welcome ${this.name} ${this.lastName}`);
    }

}