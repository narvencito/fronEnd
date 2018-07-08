import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { restResponse } from '../model/restResponse.model';
import { UserModel } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }


  /**
   * metodo para validar campos obligatorios "validate"
   */
  public validate(user: UserModel): boolean {
    let isValid = true;
    
    if (!user.first_name) {
      isValid = false;
    }

    if (!user.first_surname) {
      isValid = false;
    }

    if (!user.address) {
      isValid = false;
    }

    return isValid;
  }

  /**
   * saveOrUpdate
   */
  public saveOrUpdate(user: UserModel): Observable<restResponse> {
    return this.http.post<restResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify( user));
  }

}
