import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-company-button',
  templateUrl: './company-button.component.html',
  styleUrls: ['./company-button.component.scss']
})
export class CompanyButtonComponent implements OnInit {
  @Input() link: string;
  @Input() title: string;
  @Input() isExternal: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
