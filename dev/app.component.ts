import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h3
        (click)="onSelect()"
        [class.clicked]="showDetail === true"
        >{{contact.firstName}} {{contact.lastName}}</h3>
        <div>
            <ul>
                <li *ngIf="showDetail === true">
                Email: {{contact.email}}
                </li>
                <li *ngIf="showDetail === false">
                Address: {{contact.address}}
                </li>
            </ul>
            
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public contact = {
        firstName: "Hec",
        lastName: "Herrera",
        email: "hh@gmail.com",
        address: "sodijv"
    };

    public showDetail = false;

    onSelect() {
        if(this.showDetail === false){
            this.showDetail = true;
        } else {
            this.showDetail = false;
        }
    }
}