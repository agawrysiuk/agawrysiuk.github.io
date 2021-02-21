import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private readonly animationName = 'badge-animation';
  // for mobile's touch
  private animationInProcess = false;

  animate(target: HTMLElement): void {
    if (!this.animationInProcess) {
      this.animationInProcess = true;
      target.classList.add(this.animationName);
      setTimeout(() => {
        target.classList.remove(this.animationName);
        this.animationInProcess = false;
      }, 500);
    }
  }
}
