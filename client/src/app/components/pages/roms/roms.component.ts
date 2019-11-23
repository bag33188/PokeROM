import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import { Rom } from '../../../models/Rom';
import he from 'he';
import { JSONObject } from '../../../models/JSONObject';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.scss']
})
export class RomsComponent implements OnInit, AfterContentInit {
  public romsData: Rom[] = new Array<Rom>();
  public currentPage: number = 1;
  public itemsPerPage: number = 4;
  private pageSize: number;
  public loading: boolean = true;
  public noRomsMsg: string = '';
  private limit: number = 35;
  public isError: boolean = false;

  private static jumpToTop(): void {
    window.scrollTo(0, 0);
  }

  constructor(private romsService: RomsService) {}

  ngOnInit(): void {
    this.getRoms();
  }

  ngAfterContentInit(): void {
    RomsComponent.jumpToTop();
  }

  private getRoms(): void {
    this.romsService.getAllRoms({ limit: this.limit }).subscribe(
      (roms: Rom[]): void => {
        this.isError = false;
        roms.forEach((rom: Rom): void => {
          const { game_name, description }: Rom = rom;
          rom.game_name = he.decode(game_name);
          rom.description = he.decode(description);
        });
        this.romsData = roms;
        this.loading = false;
        if (!this.loading && this.romsData.length < 1) {
          this.noRomsMsg = 'No ROMs to Show';
        }
      },
      (err: JSONObject): never => {
        this.isError = true;
        this.loading = false;
        this.noRomsMsg = '';
        throw err;
      }
    );
  }

  public onPageChange(paginateNum: number): void {
    this.pageSize = paginateNum;
    RomsComponent.jumpToTop();
  }
}
