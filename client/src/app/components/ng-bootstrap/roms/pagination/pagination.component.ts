import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { Rom } from '../../../../models/Rom';

@Component({
  selector: 'app-roms-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public romsData: Rom[];
  @Input() public currentPage: number;
  @Input() public pageSize: number;
  @Input() public itemsPerPage: number;
  @Output() public paginate: EventEmitter<number> = new EventEmitter<number>();
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
    this.paginate.emit(this.pageSize);
  }

  public changeSizeOfPagination(): 'sm' | 'lg' | '-' {
    // if (this.pageWidth <= 339) {
    //   return 'sm';
    // } else {
    //   return '-';
    // }
    return '-';
  }
}
