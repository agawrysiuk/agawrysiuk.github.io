import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private readonly animationName = 'badge-animation';

  animate(target: HTMLElement): void {
    target.classList.add(this.animationName);
    setTimeout(() => target.classList.remove(this.animationName), 500);
  }
}
