import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: [
    './no-results.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class NoResultsComponent implements OnInit {

  @Input()
  public message: String = 'Test Message';
  @Input()
  public height: String = '350px';

  constructor() { }

  ngOnInit(): void {
  }

}
