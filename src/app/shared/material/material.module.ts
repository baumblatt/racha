import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatToolbarModule,
} from '@angular/material';

@NgModule({
	imports: [
		LayoutModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatToolbarModule
	],
	exports: [
		LayoutModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatToolbarModule
	],
	declarations: []
})
export class MaterialModule {
}
