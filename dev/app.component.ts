import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h3
        (click)="onSelect()"
        >{{contact.firstName}} {{contact.lastName}}</h3>
        <div *ngIf="showDetail === true">
            Email: {{contact.email}}
        </div>
    `,
})
export class AppComponent {
    public contact = {
        firstName: "Hec",
        lastName: "Herrera",
        email: "hh@gmail.com"
    };

    public showDetail = false;

    onSelect() {
        this.showDetail = true;
    }
}