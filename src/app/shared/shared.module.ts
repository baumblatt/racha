import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from './material/material.module';

@NgModule({
	imports: [CommonModule, AngularFirestoreModule, AngularFireAuthModule, MaterialModule, ReactiveFormsModule],
	exports: [CommonModule, AngularFirestoreModule, AngularFireAuthModule, MaterialModule, ReactiveFormsModule],
	declarations: []
})
export class SharedModule {}
