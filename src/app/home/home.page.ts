import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
notes: any;
name:string;
data:any;
readonly ROOT_URL = 'http://localhost:3000/notes/'+this.authService.userid;
constructor(public http: HttpClient,private authService: AuthService){}


  ngOnInit(){
  this.name=this.authService.first_name;
  }

  ionViewDidEnter(){
    console.log(this.authService.userid)
  this.notes = this.http.get(this.ROOT_URL);
  }
  
 }
