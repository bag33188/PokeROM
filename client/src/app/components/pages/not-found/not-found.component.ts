import { Component, OnInit } from '@angular/core';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public notFoundMsg: string;

  constructor() {}

  ngOnInit(): void {
    this.notFoundMsg = 'Error 404: Page Not Found.';
    logger.error(this.notFoundMsg);
  }
}
