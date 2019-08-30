import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-delete-user-btn',
  templateUrl: './delete-user-btn.component.html',
  styleUrls: ['./delete-user-btn.component.scss']
})
export class DeleteUserBtnComponent implements OnInit {
  public btnText: string;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.btnText = 'Delete User!';
  }

  public confirmDeletion(): void {
    const modalRef: NgbModalRef = this.modalService.open(ModalComponent, {
      centered: true
    });
    const key: string = 'username';
    modalRef.componentInstance.username = JSON.parse(
      localStorage.getItem('user')
    )[key];
  }
}
