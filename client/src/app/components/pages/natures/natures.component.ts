import { Component, OnInit, AfterContentInit } from '@angular/core';
import Nature from '../../../models/Nature';
import { NaturesService } from '../../../services/natures.service';

@Component({
  selector: 'app-natures',
  templateUrl: './natures.component.html',
  styleUrls: ['./natures.component.scss']
})
export class NaturesComponent implements OnInit, AfterContentInit {

  natures: Nature[] = [];
  headers: string[];

  constructor(private naturesService: NaturesService) { }

  ngOnInit() {
    this.setNatures();
    this.setHeaders();
  }

  ngAfterContentInit() {
    window.scrollTo(0, 0);
  }

  setHeaders(): void {
    this.headers = [
      'Nature',
      'Increased Stat',
      'Decreased Stat',
      'Flavor',
      'Usage'
    ];
  }

  setNatures(): void {
    this.naturesService.getAllNatures().subscribe(
      (res: Nature[]): void => {
        this.natures = res;
      }, (err: any): never => {
        throw err;
      });
  }

}
