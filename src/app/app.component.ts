import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	data = [
		{
			chunkType: 'logical',
			value: 'or'
		},
		{
			chunkType: 'criteria',
			value: 'range'
		},
		{
			chunkType: 'criteria',
			value: 'number'
		},
		{
			chunkType: 'group',
			expression: [
				{
					chunkType: 'logical',
					value: 'or'
				},
				{
					chunkType: 'criteria',
					value: 'range'
				},
				{
					chunkType: 'criteria',
					value: 'number'
				}
			]
		},
	];
}
