import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent implements OnInit {
  @Input() image: string;
  @Output() action = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
