import { Component, Input, ViewChild, ElementRef, HostListener, AfterContentInit, DoCheck } from '@angular/core';
import { Button } from '../button.model';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent implements AfterContentInit, DoCheck {
  tipTop: number = 0;
  topPastTip: boolean = false;
  @Input() button: Button;
  @ViewChild('tooltip') el: ElementRef;

  constructor() { }

  ngDoCheck() {
    if (!this.button.tooltip.hidden && window.scrollY > this.tipTop) {
      this.topPastTip = true;
    }
  }

  ngAfterContentInit() {
    const clientRect = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
    this.tipTop = clientRect;
  }

  @HostListener('document:scroll') onScroll() {
    if (!this.button.tooltip.hidden && window.scrollY > this.tipTop) {
      this.topPastTip = true;
    } else if (!this.button.tooltip.hidden && window.scrollY < this.tipTop) {
      this.topPastTip = false;
    }
  }
}
