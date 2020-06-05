import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[libColor]'
})
export class ColorDirective implements AfterViewInit {
  @Input() color: string;
  @Input() fontColor: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.firstElementChild.style.backgroundColor = this.color;
    this.el.nativeElement.firstElementChild.style.color = this.fontColor;
    this.el.nativeElement.firstElementChild.style.borderColor = this.color || this.fontColor;
  }


}
