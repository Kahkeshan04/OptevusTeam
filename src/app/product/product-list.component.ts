import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IMembers } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy {
    title: string = 'Team Members List';
    imageWidth: number = 50;
    imageHeight: number = 60;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub! : Subscription;

    
    filteredMembers: IMembers[] = [];

    members: IMembers[] = [];
    private _listFilter: string = '';

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.warn('In setter :', value);
        this.filteredMembers = this.performFilter(value);
    }


    constructor(private productService: ProductService){}

    performFilter(filterBy: string): IMembers[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.members.filter((members: IMembers) => members.memberName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this.productService.getMembers().subscribe({
            next: products => {
                this.members = products;
                this.filteredMembers = this.members;
            }, 
            error: err => this.errorMessage =err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    
    onViewTimeClicked(message: string): void {
        this.title = message;
        const titleBg = document.querySelector('.card-header') as HTMLElement;
        const view = parseInt(message.substring(message.indexOf(':') + 2));
        if (view < 3) {
            console.log(typeof (view));
            console.log(view);
            titleBg.style.backgroundColor = "#ffcccb";
            titleBg.style.color = "#ff0000";
        }
        else if (view === 5) {
            console.log(typeof (view));
            console.log(view);
            titleBg.style.backgroundColor = "#d0f0c0";
            titleBg.style.color = "#1f3114";
        }
        else {
            console.log(typeof (view));
            console.log(view);
            titleBg.style.backgroundColor = "#ffe5cc";
            titleBg.style.color = "#ff6600";
        }
    }

    view(view: any) {
        throw new Error("Method not implemented.");
    }
}