import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import { Rom } from '../../../models/Rom';
import he from 'he';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.scss']
})
export class RomsComponent implements OnInit, AfterContentInit {
  romsData: Rom[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  pageSize: number;
  loading: boolean = true;
  noRomsMsg: string = '';
  limit: number = 35;

  static jumpToTop(): void {
    window.scrollTo(0, 0);
  }

  constructor(private romsService: RomsService) {}

  ngOnInit(): void {
    this.getRoms();
  }

  ngAfterContentInit(): void {
    RomsComponent.jumpToTop();
  }

  getRoms(): void {
    const limit: number = this.limit;
    this.romsService.getAllRoms(limit).subscribe(
      (roms: Rom[]): void => {
        roms.forEach((rom: Rom): void => {
          rom.gameName = he.decode(rom.gameName);
          rom.description = he.decode(rom.description);
        });
        this.romsData = roms;
        this.loading = false;
        if (!this.loading && this.romsData.length === 0) {
          this.noRomsMsg = 'No ROMs to Show';
        }
      },
      (err: any): never => {
        this.loading = false;
        this.noRomsMsg = 'No ROMs to Show (Error loading ROMs)';
        throw err;
      }
    );
  }

  onPageChange(paginateNum: number): void {
    this.pageSize = paginateNum;
    RomsComponent.jumpToTop();
  }
}
