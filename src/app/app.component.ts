import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-svg-sample';
  text = 'テキスト';
  left = {
    big: '#ffaaaa',
    small: '#0000bf'
  };
  right = {
    big: '#56aaff',
    small: '#bf0000',
  };

  changeText() {
    if (this.text === 'text') {
      this.text = 'テキスト';
    } else {
      this.text = 'text';
    }
  }

  changeColor() {
    if (this.left.big === '#ffaaaa') {
      this.left = {
        big: '#56aaff',
        small: '#bf0000',
      };
      this.right = {
        big: '#ffaaaa',
        small: '#0000bf'
      };
    } else {
      this.right = {
        big: '#56aaff',
        small: '#bf0000',
      };
      this.left = {
        big: '#ffaaaa',
        small: '#0000bf'
      };
    }
  }
}
