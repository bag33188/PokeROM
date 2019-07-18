import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import ApiVersion from '../../../models/ApiVersion';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  apiVersion: string;
  apiUrl: string;
  httpVerbs: string[];
  constructor(private apiService: ApiService) {}

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
