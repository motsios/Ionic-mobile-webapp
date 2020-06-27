import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor( private navCtrl: NavController,
  private authService: AuthService,public http: HttpClient) { }
  
  ngOnInit() {
    this.http.get('http://localhost:3000/notes')
    .subscribe(data=>console.log(data))
     }
    
  login(form: NgForm) {
    this.authService.login(form.value.email,form.value.password)    
  }
  exit(){
    navigator['app'].exitApp();
  
  }
}
