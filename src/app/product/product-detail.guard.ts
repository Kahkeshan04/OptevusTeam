import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IMembers } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  employee: IMembers | undefined; 
  // console.warn(this.employee.memberId);
      // console.log(id);
      // if(this.employee.memberId.some(e => e.memberId === id )){}
  constructor(private router: Router){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id<1){
        alert('Invalid product id');
        this.router.navigate(['/product']);
        return false;
      }
    return true;
  }
}
