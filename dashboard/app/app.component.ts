import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">EW</a>
          <ul class="right hide-on-med-and-down">
            <li><a routerLink="/bio">Bio</a></li>
            <li><a routerLink="/contact">Contact</a></li>
          </ul>

          <ul id="nav-mobile" class="side-nav">
          <li><a routerLink="/bio">Bio</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <router-outlet></router-outlet>

      <div class="container">
      <div class="pull-left">
          <p><em><small><a href="#" target="_wiki" title="Wiki..."><strong>Edouard Wolton<sup>artiste</sup></strong></a>
           <a href="#" target="_MANIFEST" title="Voir détails...">(version)</a>
          par <a href="#" target="#" title="author">Théophile Vast</a>
          @ VAST 2016</small></em></p>
      </div>
      </div>
      `
})
export class AppComponent { }
