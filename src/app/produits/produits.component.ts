import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public products!: Product[];
  public editProduct!: Product;
  public deleteProduct!: Product;


  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }



  public AddProduct(addForm: NgForm): void {
   document.getElementById('add-product-form')!.click();
    this.productService.addProduct(addForm.value).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public getProducts() {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public UpdateProduct(product: Product,idProduit: number): void {
    this.productService.updateProduct(product,idProduit).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public DeleteProduct(idProduit: number): void {
    this.productService.deleteProduct(idProduit).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




}
