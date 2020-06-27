import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-onenote',
  templateUrl: './onenote.page.html',
  styleUrls: ['./onenote.page.scss'],

})
export class OnenotePage{
  
name: string;
content: string;
number: number;
readonly BASE_URL = 'http://localhost:3000/notes/';
 
wrongtAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Attention';
  alert.message = 'Empty rows';
  alert.buttons = ['Thank you'];
  document.body.appendChild(alert);
  return alert.present();
}
 
constructor(public activeRoute: ActivatedRoute,public http: HttpClient,
  public loadingController: LoadingController,private navCtrl: NavController) { }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Delete Note...',
      duration: 1000
    });
    await loading.present();
  }

  async updateLoading() {
    const loading = await this.loadingController.create({
      message: 'Update Note...',
      duration: 1000
    });
    await loading.present();
  }
 
  updateProses(){

    var dataRecv=this.activeRoute.snapshot.paramMap.get('noteId');
    
    if(this.name!=null && this.content!=null && this.number!=null){
   this.http.put(this.BASE_URL + dataRecv,{
    'title' : this.name,
    'content': this.content,
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
            console.log(this.name)
            this.updateLoading();
            this.navCtrl.navigateRoot('/home')
              console.log('The POST observable is now completed.');
          }); 
       }
       else{this.wrongtAlert();
      }
    }

  deleteProses(){
    var dataRecv=this.activeRoute.snapshot.paramMap.get('noteId');
    this.presentLoading();
    return this.http.delete<any>(this.BASE_URL + dataRecv).subscribe(
      (val) => {
          console.log( 'DELETE call successful value returned in body', val);
      },
      response => {
          console.log('DELETE call in error', response);
      },
      () => {
        this.navCtrl.navigateRoot('/home')
          console.log('The DELETE observable is now completed.');
    });
  }
}