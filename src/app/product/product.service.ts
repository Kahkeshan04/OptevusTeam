import { Injectable } from "@angular/core";
import { IMembers } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    private memberUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getMembers(): Observable<IMembers[]> {
        return this.http.get<IMembers[]>(this.memberUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError (err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message} `;
        } else {
            errorMessage = `Server returend code : ${err.status}, error message is : ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}