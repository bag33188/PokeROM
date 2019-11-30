import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-modal-content',
  templateUrl: './ie-modal-content.component.html',
  styleUrls: ['./ie-modal-content.component.scss']
})
export class IeModalContentComponent implements OnInit {
  @Input() public reasons: string[];

  constructor(public activeModal: NgbActiveModal) {}

  public ngOnInit(): void {}
}
