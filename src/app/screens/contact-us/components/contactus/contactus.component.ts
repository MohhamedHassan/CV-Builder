import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactusForm:FormGroup=new FormGroup({})
  submited:boolean=false
  loading=false
  sent=false
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.contactusForm=this.fb.group({
      name:['',[Validators.required,this.emptyContent]],
      email:['',[Validators.required,Validators.email,this.emptyContent]],
      message:['',[Validators.required,this.emptyContent]]
    })
  }
  emptyContent(control:AbstractControl) {
    if(control.value) {
        if(control.value.trim()=='') return {invalidContetn:true}
     }
     return null
  }
  contactus(value:any) {
    console.log(value)
    this.submited=true

    if(this.contactusForm.valid) {
      this.submited=false
      this.loading=true
  
      this.http.post(`${environment.apiUrl}contactUs`,value).subscribe(
        res => {
          console.log(res)
          this.contactusForm.reset()
          this.loading=false
          this.sent=true
          setTimeout(() => {
            this.sent=false
          }, 2000);
        } , err =>  {
          console.log(err)
        }
      )
    }
  }
}
