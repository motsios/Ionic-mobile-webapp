import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser = this.authService.isLoggedIn;
      if (currentUser) {
          // authorised so return true
          return true;
      }
      else
      {
       this.router.navigate(['/login']);
      return false;
    }
  }
}