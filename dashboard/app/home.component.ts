import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <div class="section no-pad-bot" >
    <div class="container">
      <br><br>
      <h1 style="z-index: 2;" class="header center orange-text">Starter Template</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
      <div class="row center">
        <a routerLink="/oeuvre" id="download-button" class="btn-large waves-effect waves-light black">Bienvenue sur le site d'Edouard Wolton</a>
      </div>
      <br><br>

    </div>
  </div>
  <video id="myvid" autoplay loop controls>
  <source src="vid/edouardmonte.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>

  `,
  styleUrls: ['app/home.component.css']

})
export class HomeComponent { }
