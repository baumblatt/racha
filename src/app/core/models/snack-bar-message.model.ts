import { MatSnackBarConfig } from '@angular/material';

export interface SnackBarMessage {
	message: string;
	action?: string;
	config?: MatSnackBarConfig;
}
