import {
  Component,
  OnInit,
  AfterContentInit,
  HostListener
} from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import Rom from '../../../models/Rom';

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
  @HostListener('window:load')
  windowOnLoad(): void {
    if (!this.loading) {
      this.noRomsMsg = 'No ROMs to Show';
    }
  }

  constructor(private romsService: RomsService) {}

  ngOnInit() {
    this.getRoms();
  }

  ngAfterContentInit() {
    this.jumpToTop();
  }

  getRoms(): void {
    const limit: number = this.limit;
    this.romsService.getAllRoms(limit).subscribe(
      (roms: Rom[]): void => {
        this.romsData = roms;
        this.loading = false;
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
