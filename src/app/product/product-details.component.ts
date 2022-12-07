import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMembers } from './product';
import products from 'src/api/products/products.json';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = '';
  employee: IMembers[] = products;
  index: number = 0;
  constructor(private road: ActivatedRoute, private routeBack: Router) { }

  ngOnInit(): void {
    const id = Number(this.road.snapshot.paramMap.get('id'));
    const name = this.road.snapshot.paramMap.get('name');
    this.pageTitle = `${name}'s Details :-`;

    this.index = this.employee.findIndex(e => e.memberId == id); 
    
    const titleBg = document.querySelector(".card-header") as HTMLElement;
    const footBg = document.querySelector(".card-footer") as HTMLElement;
    const tableColor = document.querySelector(".table") as HTMLElement;
    const view = this.employee[this.index].viewTime;
    if (view < 3) {
      console.log(typeof (view));
      console.log(view);
      titleBg.style.backgroundColor = "#ffcccb";
      footBg.style.backgroundColor = "#ffcccb";
      tableColor.style.color = "#ff0000";
    }
    else if (view === 5) {
      console.log(typeof (view));
      console.log(view);
      titleBg.style.backgroundColor = "#d0f0c0";
      footBg.style.backgroundColor = "#d0f0c0";
      tableColor.style.color = "#1f3114";
    }
    else {
      console.log(typeof (view));
      console.log(view);
      titleBg.style.backgroundColor = "#ffe5cc";
      footBg.style.backgroundColor = "#ffe5cc";
      tableColor.style.color = "#ff6600";
    }
  }

  onBack(): void {
    this.routeBack.navigate(['/product']);
  }
}
