import { Component } from '@angular/core';

import { MasonryModule } from 'angular2-masonry';

@Component({
  selector: 'foo',
  templateUrl: `app/foo.component.html`,
  styleUrls: ['app/foo.css']
})
export class FooComponent {
  bricks = [
    {title: 'Brick 1'},
    {title: 'Brick 2'},
    {title: 'Brick 3'},
    {title: 'Brick 4'},
    {title: 'Brick 5'},
    {title: 'Brick 6'}
  ]
  foo = [
    {photo:'app/img/edouard/image_2.png', text:'hello'},
    {photo:'app/img/edouard/image_3.png', text:'hello'},
    {photo:'app/img/edouard/image_4.png', text:'hello'},
    {photo:'app/img/edouard/image_5.png', text:'hello'},
    {photo:'app/img/edouard/image_6.png', text:'hello'},
    {photo:'app/img/edouard/image_7.png', text:'hello'},
    {photo:'app/img/edouard/image_8.png', text:'hello'},
    {photo:'app/img/edouard/image_9.png', text:'hello'},
    {photo:'app/img/edouard/image_10.png', text:'hello'},
    {photo:'app/img/edouard/image_11.png', text:'hello'},
    {photo:'app/img/edouard/image_2.png', text:'hello'},
    {photo:'app/img/edouard/image_3.png', text:'hello'},
    {photo:'app/img/edouard/image_4.png', text:'hello'},
    {photo:'app/img/edouard/image_5.png', text:'hello'},
    {photo:'app/img/edouard/image_6.png', text:'hello'},
    {photo:'app/img/edouard/image_7.png', text:'hello'},
    {photo:'app/img/edouard/image_8.png', text:'hello'},
    {photo:'app/img/edouard/image_9.png', text:'hello'},
    {photo:'app/img/edouard/image_10.png', text:'hello'},
    {photo:'app/img/edouard/image_11.png', text:'hello'},
    {photo:'app/img/edouard/image_2.png', text:'hello'},
    {photo:'app/img/edouard/image_3.png', text:'hello'},
    {photo:'app/img/edouard/image_4.png', text:'hello'},
    {photo:'app/img/edouard/image_5.png', text:'hello'},
    {photo:'app/img/edouard/image_6.png', text:'hello'},
    {photo:'app/img/edouard/image_7.png', text:'hello'},
    {photo:'app/img/edouard/image_8.png', text:'hello'},
    {photo:'app/img/edouard/image_9.png', text:'hello'},
    {photo:'app/img/edouard/image_10.png', text:'hello'},
    {photo:'app/img/edouard/image_11.png', text:'hello'},
    {photo:'app/img/edouard/image_2.png', text:'hello'},
    {photo:'app/img/edouard/image_3.png', text:'hello'},
    {photo:'app/img/edouard/image_4.png', text:'hello'},
    {photo:'app/img/edouard/image_5.png', text:'hello'},
    {photo:'app/img/edouard/image_6.png', text:'hello'},
    {photo:'app/img/edouard/image_7.png', text:'hello'},
    {photo:'app/img/edouard/image_8.png', text:'hello'},
    {photo:'app/img/edouard/image_9.png', text:'hello'},
    {photo:'app/img/edouard/image_10.png', text:'hello'},
    {photo:'app/img/edouard/image_11.png', text:'hello'}
  ];
  $ : any;

  ngOnInit() {
  }
}
