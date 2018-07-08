import { Component, OnInit } from '@angular/core';

import { CreateUserService } from './create-user.service';
import { UserModel } from '../model/user.model';
import { ok } from './../model/httpstatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {


  private user: UserModel;
  private isValid: boolean = true;
  private message: String = "";

  constructor(private createUserService: CreateUserService, private router: Router) {
    this.user = new UserModel();
  }

  ngOnInit() {

  }

  /**
   * saveOrUpdate
   */
  public saveOrUpdate(): void {

    this.isValid = this.createUserService.validate(this.user);

    if (this.isValid) {
      this.createUserService.saveOrUpdate(this.user).subscribe(res=>{
        if(res.responseCode==ok){
          this.router.navigate(['/userComponent'])
        }else{
          this.message=res.message;
          this.isValid=false;
        }
      });
    }else{
this.message="los campos con * son obligatorios";
    }
  }

}
