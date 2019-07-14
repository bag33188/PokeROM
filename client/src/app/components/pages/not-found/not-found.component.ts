import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(private logger: LoggerService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.logger.error(`Error 404: Page Not Found - "${this.pathName()}"`);
  }

  pathName(): string {
    return this.route.snapshot.url[1].path.replace('/404', '');
  }
}
