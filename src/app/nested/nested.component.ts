import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-nested',
	templateUrl: './nested.component.html',
	styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
	dragCondition = true;
	@Input() data;

	constructor() {
	}

	ngOnInit() {
		console.log(this.data);
	}

	mouseEvent(bool) {
		this.dragCondition = bool;
		console.log(this.dragCondition)
	}

	addTo(event) {
		console.log(event);
	}
}
