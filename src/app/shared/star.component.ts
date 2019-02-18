import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating: number = 4;
    starWidth: number;

    @Output() starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

    showStarRating() {
        this.starRatingClicked.emit(`The product rating is ${this.rating}!`);
    }

    ngOnChanges() {
        this.starWidth = (75 / 5) * this.rating;
    }

}