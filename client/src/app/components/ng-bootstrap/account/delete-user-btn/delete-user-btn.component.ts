import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-delete-user-btn',
  templateUrl: './delete-user-btn.component.html',
  styleUrls: ['./delete-user-btn.component.scss']
})
export class DeleteUserBtnComponent implements OnInit {
  public btnText: string;
  public loading: boolean;
  public firedOff: boolean;
  @Output() public isError: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.btnText = 'Delete User!';
  }

  public confirmDeletion(): void {
    const modalRef: NgbModalRef = this.modalService.open(ModalComponent, {
      centered: true
    });
    modalRef.componentInstance.loading.subscribe((loading: boolean): void => {
      this.loading = loading;
    });
    modalRef.componentInstance.isErrorDeleting.subscribe(
      (isError: boolean): void => {
        this.isError.emit(isError);
      }
    );
    modalRef.componentInstance.firedOff.subscribe((firedOff: boolean): void => {
      this.firedOff = firedOff;
    });
    const key: string = 'username';
    modalRef.componentInstance.username = JSON.parse(
      localStorage.getItem('user')
    )[key];
  }
}
