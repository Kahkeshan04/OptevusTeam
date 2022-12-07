import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
    selector:'pm-view',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']

})
export class ViewComponent implements OnChanges{
    @Input() view: number = 0;
    @Input() name: string = '';
    cropWidth: number = 75;
    @Output() viewTimeClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() : void {
        this.cropWidth = this.view*75/5; 
    }

    onClick(): void{
        this.viewTimeClicked.emit(`The View Time of ${this.name} is : ${this.view} `);
    }
}