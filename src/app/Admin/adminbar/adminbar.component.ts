import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Admin/auth.service';

@Component({
  selector: 'app-adminbar',
  templateUrl: './adminbar.component.html',
  styleUrls: ['./adminbar.component.scss']
})
export class AdminbarComponent implements OnInit{
  constructor(private admin:AuthService, private router : Router){}
  ngOnInit(): void {
    this.isLoggedIn();
  }

  adminName:any;
  isLoggedIn(){
    let jsonCurrentUser: any = localStorage.getItem("currentAdmin");
    let currentUser = JSON.parse(jsonCurrentUser);
    this.adminName = currentUser.name;

    }

  logout(){
    let jsonCurrentUser: any = localStorage.getItem("currentAdmin");
    let currentUser = JSON.parse(jsonCurrentUser);
    this.admin.logout(currentUser.email, currentUser.token).subscribe({
      next:data=>{
        localStorage.removeItem("currentAdmin");
        this.router.navigate(['/admin/login']);
      }
    })
  }
}
