import { Component } from "@angular/core";
import { ShoppingItem } from "../models/shopping-item.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    name: string;
    lastName: string;
    isDisabled: boolean;
    textColor: string;
    bgColor: string;
    itemName: string;
    shoppingList: Array<ShoppingItem>;

    constructor() {
        this.name = '';
        this.lastName = '';
        this.isDisabled = false;
        this.textColor = 'red';
        this.bgColor = 'blue';
        this.itemName = '';
        // this.shoppingList = ['eggs', 'milk', 'butter'];
        this.shoppingList = [new ShoppingItem('milk', 1), new ShoppingItem('eggs', 12), new ShoppingItem('butter', 100)];
    }

    toggleSubmitBtn(): void {
        // console.log(event);
        console.log(`Changing to...${!this.isDisabled}`);
        this.isDisabled = !this.isDisabled;
    }

    updateName(event: Event): void {
        console.log("Updating element");
        const element = event.target as HTMLInputElement;
        this.name = element.value;
    }

    printWelcome(): void {
        alert(`Welcome ${this.name} ${this.lastName}`);
    }

    displayImportantMsg(): boolean {
        return true;
    }

    changeColor(): void {
        this.textColor = this.textColor === 'red' ? 'blue' : 'red';
        this.bgColor = this.bgColor === 'red' ? 'blue' : 'red';
    }

    addItem(): void {
        if (this.itemName !== '') {
          // this.shoppingList.push(this.itemName);
            this.shoppingList.push(new ShoppingItem(this.itemName, 10));
        }
    }

}
