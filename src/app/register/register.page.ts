import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

constructor( private authService: AuthService,private navCtrl: NavController){}
  ngOnInit() {}

  register(form: NgForm) {
    this.authService.register(form.value.first_name, form.value.last_name,
    form.value.email, form.value.password,form.value.rpassword)
  }
}
