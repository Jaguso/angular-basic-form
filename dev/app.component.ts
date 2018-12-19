import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect()"
                [class.clicked]="showDetail === true"
            >
            {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>

    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public contacts = [
        {
            firstName: "Marc",
            lastName: "Herrera",
            email: "hh@gmail.com",
            address: "sodijv"
        },
        {
            firstName: "David",
            lastName: "Marquez",
            email: "david@gmail.com",
            address: "sodijv"
        },
        {
            firstName: "Luke",
            lastName: "Skywalker",
            email: "luke@gmail.com",
            address: "sodijv"
        }
    ];

    public showDetail = false;

    onSelect() {
        if(this.showDetail === false){
            this.showDetail = true;
        } else {
            this.showDetail = false;
        }
    }
}