import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RetailerService } from '../../Service/retailer.service';
import { Retailer } from '../model/Retailer';

@Component({
  selector: 'app-search-retailer',
  templateUrl: './search-retailer.component.html',
  styleUrl: './search-retailer.component.css'
})
export class SearchRetailerComponent implements OnInit{
  constructor(private service: RetailerService) { }

  public retailer!: Observable<Retailer[]>;
  public filteredRetailer!: Retailer[];
  public searchTerm: String ="";

  ngOnInit() {
      this.loadRetailer();
  }
  loadRetailer() {
    this.retailer = this.service.getAllRetailer();
    this.retailer.subscribe(retailers=>{
      this.filteredRetailer = retailers;
    });
  }

  onSearch(event : Event){
    event.preventDefault();
    this.retailer.subscribe(retailer=>{
      if(!this.searchTerm.trim()){
        this.filteredRetailer=retailer;
      }else{
        this.filteredRetailer=retailer.filter(retailer=>
          this.matchSearchTerm(retailer)
        );
      }
    })
  }
  matchSearchTerm(retailer: Retailer): boolean {
   const searchTerm = this.searchTerm.toLowerCase();
   return(
    retailer.retailerId.toString().toLowerCase().includes(searchTerm)||retailer.retailerName.toLowerCase().includes(searchTerm)||
    retailer.retailerEmail.toLowerCase().includes(searchTerm)||
    retailer.retailerContactNumber.toLowerCase().includes(searchTerm)||
    retailer.retailerAdditionalDetails.toLowerCase().includes(searchTerm)

   )
  }
}
