import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Product } from "./models/product.interface";
import { Stock } from './models/stock.interface';

@Component({
    selector: 'app-stock-inventory',
    templateUrl: 'stock-inventory.component.html',
    styleUrls: ['stock-inventory.component.scss']
})
export class StockInventoryComponent {

    products!: Product[];
    
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl(''),
            code: new FormControl('')
        }),
        selector: new FormGroup({
            product_id: new FormControl(''),
            quantity: new FormControl(10)
        }),
        stock: new FormArray([])
    })

    onSubmit() {

        console.log('FORM', this.form.value);
        console.log('FORM VALID', this.form.invalid);
    }

    createStock(stock: Stock) {
        return new FormGroup({
            product_id: new FormControl(stock.product_id),
            quantity: new FormControl(stock.quantity)
        });
    }
}