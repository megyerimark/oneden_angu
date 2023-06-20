import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Admin/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  form!:FormGroup;
  submitted!: boolean;



  constructor(
    private auth:AuthService,
    private formBuilder: FormBuilder,
    private router: Router,

  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    });

  }
  register(){
    let name = this.form.value.name;
    let email = this.form.value.email;
    let password = this.form.value.password;
    let confirm_password = this.form.value.confirm_password;

    this.auth.register( name, email,password,confirm_password).subscribe({
       next : data =>{
        Swal.fire("Siker!", "\u{263A}", "success")
        localStorage.setItem('newAuthAdminData', JSON.stringify(data));
        this.router.navigate(['admin/login']);
       },

       error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Sikertelen \u{2639}',
          text: 'Sikertelen regisztráció!',
          footer: 'Kérjük vedd fel velünk a kapcsolatot!'
        })

      }

    });

  }
}



