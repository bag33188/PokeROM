import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import ApiVersion from 'src/app/models/ApiVersion';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  apiVersion: string;
  apiUrl: string;
  httpVerbs: string[];
  constructor(
    private cookieService: CookiesService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.httpVerbs = [
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE',
      'HEAD',
      'OPTIONS'
    ];
    this.apiUrl = environment.apiUrl;
    this.apiService.getApiVersion().subscribe(
      (res: ApiVersion) => {
        this.apiVersion = res.apiVersion;
      },
      (err: any): never => {
        throw err;
      }
    );
  }
}
