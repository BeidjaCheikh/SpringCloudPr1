import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})
export class BillsDetailsComponent {
  billsDetails: any;
  billId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.billId = route.snapshot.params['billId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/BILLING-SERVICE/bill/"+this.billId)
      .subscribe({
        next: (data) => {
          this.billsDetails = data;
        },
        error: (err) => { }
      });
  }
}
