import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/produit`);
  }


  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/produit`, product);
  }
  public updateProduct(product: Product ,idProduit: number): Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/produits/${idProduit}`, product);
  }

  public deleteProduct(idProduit: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/produit/${idProduit}`);
  }
}
