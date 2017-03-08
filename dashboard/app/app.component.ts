import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="animated bounceIn brand-logo">EW</a>

          <ul class="menu right hide-on-med-and-down">
          <li><a routerLink="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
            <li><a routerLink="/bio"><i class="fa fa-id-card-o" aria-hidden="true"></i> Bio</a></li>
            <li><a routerLink="/bio"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Presse</a></li>
            <li><a routerLink="/contact"><i class="fa fa-paper-plane" aria-hidden="true"></i> Contact</a></li>
            <li><a routerLink="/homeslide"><i class="fa fa-paper-plane" aria-hidden="true"></i> slide</a></li>
              
          </ul>

          <ul id="nav-mobile" class="side-nav">
         <li><a routerLink="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
            <li><a routerLink="/bio"><i class="fa fa-id-card-o" aria-hidden="true"></i> Bio</a></li>
            <li><a routerLink="/bio"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Presse</a></li>
            <li><a routerLink="/contact"><i class="fa fa-paper-plane" aria-hidden="true"></i> Contact</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <router-outlet></router-outlet>

      <footer class="menu page-footer black">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Edouard Wolton</h5>
          <p class="grey-text text-lighten-4">
         Présentation du travail d'Edouard Wolton</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Menu</h5>
          <ul> 
            <li><a class="white-text" href="#!">Presse</a></li>
            <li><a class="white-text" href="#!">Bio</a></li>
            <li><a class="white-text" href="#!">Contact</a></li>
            <li><a class="white-text" href="#!">Oeuvre</a></li>
            <li><a class="white-text" href="#!">Actualités</a></li>
            <li><a class="white-text" href="#!">UK</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Réseaux sociaux</h5>
          <ul>
            <li><a class="white-text" href="#!">Facebook</a></li>
            <li><a class="white-text" href="#!">Twitter</a></li>
            <li><a class="white-text" href="#!">Pinterest</a></li>
            <li><a class="white-text" href="#!">Vimeo</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="white-text text-lighten-3" href="http://theophilevast.fr">Théophile Vast in his 
<i class="fa fa-rocket" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>

      `,
      styleUrls: ['app/app.component.css']

})
export class AppComponent {

  ngOnInit () {
  //     $('.button-collapse').sideNav({
  //     menuWidth: 240, // Default is 240
  //     edge: 'left', // Choose the horizontal origin
  //     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  //     draggable: true // Choose whether you can drag to open on touch screens
  //   }
  // );
  }


 }
