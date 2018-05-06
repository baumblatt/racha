import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from './material/material.module';

@NgModule({
	imports: [CommonModule, AngularFirestoreModule, AngularFireAuthModule, MaterialModule],
	exports: [CommonModule, AngularFirestoreModule, AngularFireAuthModule, MaterialModule],
	declarations: []
})
export class SharedModule {}
