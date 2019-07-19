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
  sourceCodeUrl: string;
  apiVersion: string;
  apiUrl: string;
  httpVerbs: string[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.sourceCodeUrl = 'https://github.com/bag33188/PokeROM';
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
    this.getApiVersion();
  }

  getApiVersion(): void {
    this.apiService.getApiVersion().subscribe(
      (res: ApiVersion): string => (this.apiVersion = res.apiVersion),
      (err: any): never => {
        throw err;
      }
    );
  }
}
