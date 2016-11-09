import { Component } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: `app/login.component.html`,
  styleUrls: ['app/login.component.css']

})
export class LoginComponent {
  loginEmail : string;
  loginPassWord : string;
  link: any = '/secretpath'

  constructor(
    private router: Router) {
    }

    identification () {
      if(this.loginEmail == 'truc' && this.loginPassWord =='truc') {
        this.router.navigate(['secretpath']);
        // this._router.navigate(['CheckDetail', { id: checkId }]);
      }
      console.log(this.loginEmail+''+this.loginPassWord)
    }


    // gotoDetail(): void {
    //   let link = '/secretpath'
    //   this.router.navigate(link);
    // }
  }
