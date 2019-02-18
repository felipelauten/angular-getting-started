import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs"
import { tap, catchError } from "rxjs/operators" 

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    productsUrl: string = 'api/products/products.json';

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl).pipe(
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse) {
        // in a real world App, we may send the server to som remote logging infrastructure
        // instead of just logging it into the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client side network error has occurred. Handle it accordingly
            errorMessage = `An error occurred: ${err.error.message}.`;
        } else {
            // The backend returned an unsuccessful response code
            // The response body may contain clues as to what went wrong.
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}.`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);    // <-- that is an observable
    }
}