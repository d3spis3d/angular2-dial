import {Component} from 'angular2/core';

@Component({
    selector: 'bi-dial',
    templateUrl: 'src/components/ng2-bi-dial.html',
    styleUrl: ['src/components/ng2-bi-dial.css', 'src/components/ng2-dial-common.css'],
    inputs: ['min', 'max']
})
export class BiDial {
    min: number;
    max: number;
}
