import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-nested',
	templateUrl: './nested.component.html',
	styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
	@Input() data;

	constructor() {
	}

	ngOnInit() {
		this.data = [
			{
				'type': 'group',
				'id': 1,
				'expression': [
					{
						'type': 'item',
						'id': '1'
					},
					{
						'type': 'item',
						'id': '2'
					}
				]
			},
			{
				'type': 'item',
				'id': '4'
			},
			{
				'type': 'item',
				'id': '5'
			},
			{
				'type': 'item',
				'id': '6'
			}
		];
	}

	public removeItem(item: any, list: any[]): void {
		list.splice(list.indexOf(item), 1);
	}
}
