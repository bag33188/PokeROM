import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Internet Explorer Incompatibility</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div>
        <p>
          Internet Explorer is a deprecated browser and incompatible with this
          app.
          <br />
          Here's why:
        </p>
        <ol>
          <li *ngFor="let reason of reasons">{{ reason }}</li>
        </ol>
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `
})
export class ModalContentComponent {
  @Input() reasons: string[];

  constructor(public activeModal: NgbActiveModal) {}
}
