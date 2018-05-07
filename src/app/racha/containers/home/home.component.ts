import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	items: Observable<any[]>;
	constructor(db: AngularFirestore) {
		db.firestore.settings({ timestampsInSnapshots: true });
		this.items = db.collection('rachas').valueChanges().pipe(
			tap(item => console.log(item)),
		);
	}

	ngOnInit() {}
}
