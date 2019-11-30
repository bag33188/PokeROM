import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'faq-ie-modal-content',
  templateUrl: './ie-modal-content.component.html',
  styleUrls: ['./ie-modal-content.component.scss']
})
export class IeModalContentComponent implements OnInit {
  @Input() public reasons: string[];
  public modalTitle: string;

  constructor(public activeModal: NgbActiveModal) {}

  public ngOnInit(): void {
    this.modalTitle = 'Internet Explorer Incompatibility';
  }
}
