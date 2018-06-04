import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
	MatBottomSheetModule,
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSnackBarModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		LayoutModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSnackBarModule,
		MatToolbarModule
	],
	exports: [
		LayoutModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSnackBarModule,
		MatToolbarModule
	],
	declarations: []
})
export class MaterialModule {
}
