import { Component, NgZone, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CrudService } from './../service/crud.service';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import {Confirmvalidator} from '../confirmed.validator'
@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
 // RegistationForm: FormGroup ;
  RegistationForm:FormGroup=new FormGroup({});
  constructor(  public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.RegistationForm = this.formBuilder.group({
      Fullname: ['',Validators.required],
      Mobilenumber: ['',Validators.required],
      Email: ['',Validators.required],
      Username:['',Validators.required],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]},
      {
        validator:Confirmvalidator('password','confirmpassword')
      }
      
)}
 get f()
  {
    return this.RegistationForm.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(): any {
    this.crudService.AddRegister(this.RegistationForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
    });
  }

}
