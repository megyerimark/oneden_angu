import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/Shared/reservation.service';
import Swal from 'sweetalert2';

;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  currentUser: any;


  form!:FormGroup;
reservations: any;
    constructor(
      private router:Router,
      private resService:ReservationService,
      private http:HttpClient,
      private formBuild:FormBuilder){}





    ngOnInit(): void {
      this.form = this.formBuild.group({
        first_name:['', Validators.required],
        email: ['', [Validators.required]],
        phone_number:['', Validators.required],
        res_date:['', Validators.required],
        messages:['', Validators.required],

      })
    }



  reservation(){

    let  first_name = this.form.value.first_name;
    let  email = this.form.value.email;
    let  phone_number = this.form.value.phone_number;
    let  res_date = this.form.value.res_date;
    let  messages = this.form.value.messages;

      this.resService.store(first_name,email,
        phone_number ,res_date,messages).subscribe({
        next: data => {
          Swal.fire(
            'Sikeres Foglalás:',
            data.data.first_name ,
            'success'
          );
          this.form.reset();
        },
        error: err => {
          // Kezelheted az esetleges hibát itt
        }
      });
    }


}



