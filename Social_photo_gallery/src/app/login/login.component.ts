import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { CrudService } from './../service/crud.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({});

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) { 
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        Email:['',Validators.required],
        Password:['',[Validators.required]]
      })
  }
  get f() { return this.loginForm.controls; }
  onlogin() {
             console.log(this.f['Email'].value, this.f['Password'].value);
             this.crudService.Login(this.f['Email'].value, this.f['Password'].value).pipe(first())
             .subscribe({
                next: () => {this.ngZone.run(() => this.router.navigateByUrl('/dashboard')) },
                error: (error: any) => {console.log(error); }});
           }
}


