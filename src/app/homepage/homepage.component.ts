import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./style/homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  faGift = faGift 
  faProductHunt = faProductHunt;
  faServicestack = faServicestack;
  faTruckFast = faTruckFast;

  products: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any[]>('assets/products_url_rong.json').subscribe(data => {
      this.products = data;
    });
  }
}
