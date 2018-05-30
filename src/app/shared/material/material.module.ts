import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
	MatBottomSheetModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		LayoutModule,
		MatBottomSheetModule,
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
		MatBottomSheetModule,
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
