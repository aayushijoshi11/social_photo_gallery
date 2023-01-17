import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private http: HttpClient) { }
  get f(){
    return this.myForm.controls;
  }
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 
  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value||'');
     
    this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
  ngOnInit(): void {
  
  }
  product: any[] = [{
    url: 'assets/Image_folder/1X9A1730.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1731.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1732.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1734.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1735.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1750.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1745.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1747.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1762.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1776.JPG'
   },
   {
    url: 'assets/Image_folder/1X9A1794.JPG'
   }
  ] 

}
