import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class StockInventoryService {

    constructor(private http: HttpClient) {}
    
}