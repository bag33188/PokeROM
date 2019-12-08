import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Environment } from '../../interfaces/Environment';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ApiVersion } from '../../models/ApiVersion';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {
  public emulatorUrl: string;
  public environment: Environment;
  public isCollapsed: boolean;
  public showDummy: boolean;
  public apiVersion$: Observable<ApiVersion>;
  @HostListener('window:hashchange')
  private onHashChange(): void {
    this.showDummy = !!location.hash;
    switch (this.route.snapshot.fragment) {
      case 'browser-compatibility':
        this.viewportScroller.scrollToAnchor('browser-compatibility');
        break;
      case 'cookies':
        this.viewportScroller.scrollToAnchor('cookies');
        break;
      default:
        this.viewportScroller.scrollToPosition([0, 0]);
        break;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.environment = environment;
    this.showDummy = !!location.hash;
    this.isCollapsed = true;
    this.emulatorUrl = 'https://www.retroarch.com';
    this.apiVersion$ = this.apiService.getApiVersion();
  }

  public ngAfterViewInit(): void {
    this.onHashChange();
  }
}
