import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) { }

    pageTitle: string = 'Product List';
    showImage: boolean = false;
    errorMessage: string;

    imageWidth: number = 50;
    imageMargin: number = 2;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(listFilter: string) {
        this._listFilter = listFilter;
        this.filteredProducts = this.filterProducts(this._listFilter);
    }

    filterProducts(filter: string): IProduct[] {
        if (filter == null) {
            return this.products;
        } else {
            let lowerFilter = filter.toLowerCase();
            return filter == null ? this.products : this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(lowerFilter) != -1);
        }
    }

    filteredProducts: IProduct[];

    products: IProduct[];

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = error
        )
    }

    onRatingCliked(rating: string): void {
        this.pageTitle = 'Products List: ' + rating;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}