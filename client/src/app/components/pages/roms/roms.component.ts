import { Component, OnInit } from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import Rom from '../../../models/Rom';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.scss']
})
export class RomsComponent implements OnInit {
  romsData: Rom[] = [];
  currentPage = 1;
  itemsPerPage = 4;
  pageSize: number;

  constructor(private romsService: RomsService) {}

  ngOnInit() {
    this.getRoms();
  }

  getRoms(): void {
    this.romsService.getAllRoms(35).subscribe(
      (roms: Rom[]): void => {
        this.romsData = roms;
      },
      (err: any): never => {
        throw err;
      }
    );
  }

  onPageChange(paginateNum: number): void {
    this.pageSize = paginateNum;
    this.jumpToTop();
  }

  jumpToTop(): void {
    window.scrollTo(0, 0);
  }
}
