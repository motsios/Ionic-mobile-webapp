import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  API_URL='http://localhost:3000';
  token:any;
  first_name:string;
  userid:number;
  constructor(private http: HttpClient,
    public loadingController: LoadingController,private storage: NativeStorage,private navCtrl: NavController) { }
 
                                         //alerts
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Unique values.Please wait until registration done...',
      duration: 2000
    });
    await loading.present();
  }
  wrongRegister(){
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Notice:';
    alert.message = "Those passwords didn't match";
    alert.buttons = ['Thank you'];
    document.body.appendChild(alert);
    return alert.present();
  }
  presentAlert(){
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Subtitle';
    alert.message = 'Wrong Password';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    return alert.present();
  }
  UserAlert(){
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Subtitle';
    alert.message = 'User already exists';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    return alert.present();
  }

 login(email: String, password: String) {
  if (email==="" && password===""){
    this.wrongRegister()
  }
   return this.http.post(this.API_URL + '/users/login',
   {email: email, password: password})
   .subscribe(
     (result:JSON) =>{
     this.storage.setItem('token',result)
     if(result["error"]){
      console.log('Error storing item');
      this.presentAlert();
     }
     else{
      console.log("Token stored: " + result["token"]);
      this.token=result["token"]
      this.userid=result["id"];
      console.log(this.userid)
      this.first_name =result["first_name"];
      this.isLoggedIn = true;
      this.navCtrl.navigateRoot('/home')
    }
    })
  };
  
  register(first_name:String,last_name:String,email:String,password:String,rpassword:String)
   {
     if (first_name !='' && last_name !='' && email !='' &&  password !='' && password==rpassword){
    return this.http.post(this.API_URL + '/users/register',
      {firstName: first_name,lastName: last_name, email: email, password: password})
   .subscribe(
    (result:JSON) =>{
    if(result["error"])
     {                    
      this.UserAlert();
    }
     else{
         this.navCtrl.navigateRoot('/login');
         this.presentLoading();
        }     
      }) 
       }else  
     {  
       this.wrongRegister()
       return 
     }
   } 

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
 }