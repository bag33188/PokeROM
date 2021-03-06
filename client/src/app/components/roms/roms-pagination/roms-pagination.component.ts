import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { Rom } from '../../../models/Rom';

@Component({
  selector: 'roms-pagination',
  templateUrl: './roms-pagination.component.html',
  styleUrls: ['./roms-pagination.component.scss']
})
export class RomsPaginationComponent implements OnInit {
  @Input() public romsData: Rom[];
  @Input() public currentPage: number;
  @Input() private pageSize: number;
  @Input() public itemsPerPage: number;
  @Output() public paginate: EventEmitter<[number, number]> = new EventEmitter<
    [number, number]
  >();
  public pageWidth: number;

  @HostListener('window:resize')
  setWidth(): void {
    this.pageWidth = window.innerWidth;
  }

  constructor() {}

  public ngOnInit(): void {
    this.pageWidth = window.innerWidth;
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    this.paginate.emit([this.pageSize, this.currentPage]);
  }
}
