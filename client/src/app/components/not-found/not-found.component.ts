import { Component, OnInit } from '@angular/core';
import { LoggerService as logger } from '../../services/logger.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public static notFoundMsg: string;
  public notFoundComponent: typeof NotFoundComponent;

  constructor() {}
  private static notFound(): void {
    NotFoundComponent.notFoundMsg = 'Error 404: Page Not Found.';
    logger.error(NotFoundComponent.notFoundMsg);
  }
  public ngOnInit(): void {
    this.notFoundComponent = NotFoundComponent;
    NotFoundComponent.notFound();
  }
}
