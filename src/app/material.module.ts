import { NgModule } from '@angular/core';
import {
    MatInputModule, MatAutocompleteModule, MatButtonModule, MatChipsModule, MatCardModule, MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatIconModule
    ]
})
export class MaterialModule { }
