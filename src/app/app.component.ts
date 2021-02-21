import {Component, ElementRef, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('1s ease-out',
              style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('1s ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {

  private readonly animationName = 'badge-animation';
  private animationInProcess = false;

  @ViewChild('awsBadge') awsBadge: ElementRef;
  @ViewChild('imageWrapper') imageWrapper: ElementRef;
  @ViewChild('bubble') bubble: ElementRef;
  @ViewChild('bubbleBullets') bubbleBullets: ElementRef;
  fullBubbleSpeech: boolean = false;

  animate(): void {
    // for mobile's touch
    if (!this.animationInProcess) {
      this.animationInProcess = true;
      this.awsBadge.nativeElement.classList.add(this.animationName);
      setTimeout(() => {
        this.awsBadge.nativeElement.classList.remove(this.animationName);
        this.animationInProcess = false;
      }, 500);
    }
  }

  showFullBubbleSpeech(): void {
    if (!this.fullBubbleSpeech) {
      this.imageWrapper.nativeElement.style.marginLeft = '0';
      this.awsBadge.nativeElement.style.left = '38%';
      this.bubble.nativeElement.style.left = '55%';
      setTimeout(() => {
        this.bubble.nativeElement.style.width = '38%';
        this.bubble.nativeElement.style.height = '92%';
        this.bubble.nativeElement.style.pointer = 'default';
        this.bubbleBullets.nativeElement.style.opacity = '0';
        setTimeout(() => {
          this.fullBubbleSpeech = true;
        }, 400);
      }, 400);
    }
  }
}
