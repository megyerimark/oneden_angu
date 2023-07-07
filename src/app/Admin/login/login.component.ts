import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Admin/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {





  form!:FormGroup;
  submitted!: boolean;




  constructor(
    private auth:AuthService,
    private formBuilder: FormBuilder,
    private router: Router,) { }
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        email: new FormControl('',[ Validators.required, Validators.email]),
        password: new FormControl('',[ Validators.required])
      });
      }
      alogin(){
        let email = this.form.value.email;
        let password = this.form.value.password;

        this.auth.alogin(email,password).subscribe({
          next:res =>{
            if(res.success){
              this.router.navigate(["admin/res"]);
              localStorage.setItem('currentAdmin',
               JSON.stringify({token: res.data.token, name: res.data.name}));
              // this.toastr.success('Üdvözöllek\n' + res.data.name)
              Swal.fire({
                text: 'Sikeres bejelentkezés.',
                color: '#30d9dfcf',
              });

            }

          },
          error:err =>{
            Swal.fire({
              icon: 'error',
              iconColor:'#3076dfcf',
              title: 'Hoppá!...',
              text: 'Sikertelen bejelentkezés!',
              confirmButtonColor: '#30d9dfcf',

            })

          }
        });
      }

      logout(){
        this.auth.logout();
        this.router.navigate(['admin/login']);


      }


}
