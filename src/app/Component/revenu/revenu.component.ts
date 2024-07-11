import { Component, OnInit } from '@angular/core';
import { Revenue } from '../model/Revenue';
import { RevenueService } from '../../Service/revenue.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrl: './revenu.component.css'
})
export class RevenuComponent implements OnInit{
  constructor(private service: RevenueService) { }

  // public revenue: Observable<Revenue[]> =of([]);
  revenue!: Observable<Revenue>;
  r = new Revenue();

  ngOnInit(){
    // this.revenue = this.service.getRevenue();
    // this.revenue.subscribe(
    //   data => console.log('Fetched Revenue Data:', data),
    //   error => console.error('Error fetching Revenue Data:', error)
    // );

    this.revenue = this.service.getRevenue();
    this.revenue.subscribe(
      data => console.log('Fetched Revenue Data:', data),
      error => console.error('Error fetching Revenue Data:', error)
    );
  }
}
