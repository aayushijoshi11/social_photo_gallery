import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { image } from "../Image";
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myForm!: FormGroup ;
  Image!: image;
  imageData!: string;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
  }
  constructor(private CrudService: CrudService) { }
  
  onFileChange(event:any) {
  
    const file = event.target.files[0];
    this.myForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  } 
  submit(){
    this.CrudService.addImage(this.myForm.value.name, this.myForm.value.image);
    this.myForm.reset();
    this.imageData = "";
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
