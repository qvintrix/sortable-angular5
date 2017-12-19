import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndModule } from 'ng2-dnd';

@NgModule({
	declarations: [
		AppComponent,
		NestedComponent
	],
	imports: [
		BrowserModule,
		[FlexLayoutModule],
		DndModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
