import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        body: new FormControl('', Validators.required)
    });

    get controls(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    submit(): string {
        return '';
    }
}
