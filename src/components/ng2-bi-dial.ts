import {Component} from 'angular2/core';

@Component({
    selector: 'bi-dial',
    templateUrl: './ng2-bi-dial.html',
    inputs: ['min', 'max']
})
export class BiDial {
    min: number;
    max: number;
}
