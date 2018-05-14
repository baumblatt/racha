import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		LayoutModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatSnackBarModule
	],
	exports: [
		LayoutModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatSnackBarModule
	],
	declarations: []
})
export class MaterialModule {}
