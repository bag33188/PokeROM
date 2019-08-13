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
  @Input() romsData: Rom[];
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() itemsPerPage: number;
  @Output() paginate: EventEmitter<number> = new EventEmitter<number>();
  pageWidth: number;

  @HostListener('window:resize')
  setWidth(): void {
    this.pageWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {
    this.pageWidth = window.innerWidth;
  }

  onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
    this.paginate.emit(this.pageSize);
  }

  changeSizeOfPagination(): 'sm' | '' {
    if (this.pageWidth <= 339) {
      return 'sm';
    } else {
      return '';
    }
  }
}
