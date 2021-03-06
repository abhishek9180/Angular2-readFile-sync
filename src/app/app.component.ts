import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Data } from './app.data';
import { DataService } from './app.data.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
	<h3>{{data?.name}}</h3>
	<my-app1></my-app1>
  `
})
export class AppComponent implements OnInit {
	name = 'Component1';
	data: Data;
	errorMessage: string;

	constructor(private dataService: DataService){
		
	}

	ngOnInit(): void {
		let self = this;
		self.dataService.getData().subscribe(response => this.data = response, error => this.errorMessage = <any> error);
	}
	
}
