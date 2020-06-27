import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, LoadingController, AlertController ,Platform} from '@ionic/angular';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
name: string;
content: string;
number: number;
readonly POST_URL = 'http://localhost:3000/notes';

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Adding Note',
    duration: 1000
  });
  await loading.present();
}
wrongAlert(){
  const alert = document.createElement('ion-alert');
  alert.subHeader = 'Notice:';
  alert.message = 'Empty Note or Importance';
  alert.buttons = ['OK'];
  document.body.appendChild(alert);
  return alert.present();
}
  constructor(public http: HttpClient,public router:Router,
    public loadingController: LoadingController,
private plt:Platform,private authService: AuthService,
    private navCtrl: NavController,private alertCtrl:AlertController){}

  ngOnInit(){}

  createdProses(){
    if (this.name!=null && this.number!=null){
    this.http.post(this.POST_URL, {
     title :   this.name,
     content:  this.content,
     review :  this.number,
     userId:  this.authService.userid,
     })
    .subscribe(
        (val) => {
            console.log('POST call successful value returned in body', 
                        val);
        },
        response => {
            console.log('POST call in error', response);
        },
        () => {
          this.presentLoading();
          this.navCtrl.navigateRoot('/home');
            console.log('The POST observable is now completed.');

        });
      }
else{
this.wrongAlert()
   }

  }
  
}