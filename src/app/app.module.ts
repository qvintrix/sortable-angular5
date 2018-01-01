import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndModule } from 'ng2-dnd';
import { DndListModule } from 'ngx-drag-and-drop-lists';

@NgModule({
	declarations: [
		AppComponent,
		NestedComponent
	],
	imports: [
		BrowserModule,
		[FlexLayoutModule],
		DndListModule,
		DndModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
