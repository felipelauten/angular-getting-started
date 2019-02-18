import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor() {
        this.filteredProducts = [];
        this.listFilter = 'cat';
    }

    pageTitle: string = 'Product List';
    showImage: boolean = false;

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

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]

    ngOnInit(): void {
        console.log('ProductListComponent - OnInit')
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}