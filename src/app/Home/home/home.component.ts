import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  ngOnInit(): void {
   this.scroll();
  }

  scroll(){
    let upButton = document.getElementById('upButton') as HTMLElement;
    window.onscroll = function scrollFunction(){
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
          upButton.style.display = "block";
        }else{
          upButton.style.display = "none";
        }
      }
    }

  topScroll(){
      document.body.scrollTop = 0 ;
      document.documentElement.scrollTop = 0;
    }
}



