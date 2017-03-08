import { Component } from '@angular/core';

@Component({
    selector: 'homecomponent',
    template: `

    <div id="barba-wrapper" aria-live="polite">
      
    <div class="barba-container" data-namespace="grid" style="visibility: visible;">
        <a class="intro-thumb" href="http://barbajs.org/demo/grid/1.html">
          <div class="full" style="background-image: url(app/img/edouard/image_3.png);"></div>
        </a>
        <a class="intro-thumb" href="http://barbajs.org/demo/grid/2.html">
          <div class="full" style="background-image: url(app/img/edouard/image_10.png);"></div>
        </a>
        <a class="intro-thumb" href="http://barbajs.org/demo/grid/3.html">
          <div class="full" style="background-image: url(app/img/edouard/image_8.png);"></div>
        </a>
        <a class="intro-thumb" href="http://barbajs.org/demo/grid/4.html">
          <div class="full" style="background-image: url(app/img/edouard/image_9.png);"></div>
        </a>
      </div></div>


      `,
      styleUrls: ['app/home.component.css']

})
export class HomeSlideComponent {

  ngOnInit () {

    Barba.Pjax.start();

  }


 }
