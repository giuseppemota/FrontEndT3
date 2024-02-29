import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PetShopInterface } from '../pet-shop-interface';


@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<{ [key: string]: PetShopInterface }>('https://database-teste-70ca1-default-rtdb.firebaseio.com/data.json').pipe(map(responseData => {
      const postArray: PetShopInterface[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...(responseData as any)[key], id: key });
        }
      }
      return postArray;
    }
    ));
  }
  postData(data: any) {
    return this.http.post('https://database-teste-70ca1-default-rtdb.firebaseio.com/data.json', data);
  }
}
