import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Data } from './app.data';
import { DataService } from './app.data.service';

@Component({
  selector: 'my-app1',
  template: `<h1>Hello {{name}}</h1>
	<button (click)="get()">Click</button>
  `
})
export class AppComponent1 implements OnInit {
	name = 'Component2';
	data: Data;
	errorMessage: string;

	constructor(private dataService: DataService){
		let self = this;
		self.dataService.getData().subscribe(response => this.data = response, error => this.errorMessage = <any> error);
	}

	get(): void {
		
		console.log(this.data.name);
	}
	
}
