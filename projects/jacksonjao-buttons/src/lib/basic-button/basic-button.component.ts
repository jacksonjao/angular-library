import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  @Input() title: string;
  @Output() action = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
