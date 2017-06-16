import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
    selector: 'my-app',
    template: `Name : <input [value]="firstName" (input)="firstName = $event.target.value" >
    {{firstName}}`,
    providers: [AppService]
})
export class AppComponent {
    firstName: string = '';

    constructor(private _appService: AppService) {
        this.getName();
    }

    getName() {
        //alert(this._appService.getName());
        this.firstName = this._appService.getName();
    }

}
