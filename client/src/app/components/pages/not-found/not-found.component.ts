import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';

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
    if (/\/404/.test(location.pathname)) {
      return this.route.snapshot.url[1].path.replace('/404', '');
    } else {
      return this.route.snapshot.url[0].path;
    }
  }
}
