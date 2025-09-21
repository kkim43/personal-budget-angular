import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private budgetData: any[] | null = null;  

  constructor(private http: HttpClient) {}

  getBudgetData(): Observable<any[]> {
    if (this.budgetData) {
      return new Observable((observer) => {
        observer.next(this.budgetData!);
        observer.complete();
      });
    } else {
      return new Observable((observer) => {
        this.http.get<any>('http://localhost:3000/budget')
          .subscribe((res) => {
            this.budgetData = res.myBudget; 
            observer.next(this.budgetData);
            observer.complete();
          });
      });
    }
  }
}
