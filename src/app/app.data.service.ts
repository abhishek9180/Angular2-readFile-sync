import { Injectable } from '@angular/core';  
import { Http, Headers, RequestOptions, Response } from '@angular/http';  
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';  

import { Data } from './app.data';

@Injectable()  
export class DataService {  
    private jsonFileURL: string = "./data/data.json";
    
    constructor(private http: Http) {}  
    //    
    getData(): Observable < Data > {  
        return this.http.get(this.jsonFileURL).map((response: Response) => {  
            return <Data> response.json()  
        }).catch(this.handleError);  
    }  
    //    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}  