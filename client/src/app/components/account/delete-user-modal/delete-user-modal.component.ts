import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { LoggerService as logger } from '../../../services/logger.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { JSONObject } from '../../../models/JSONObject';
import { CookiesService as cookies } from '../../../services/cookies.service';

@Component({
  selector: 'account-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {
  @Input() public username: string;
  @Output() public isErrorDeleting: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() public loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public firedOff: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  public btnDisabled: boolean;

  constructor(
    public modal: NgbActiveModal,
    private userService: UserService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.btnDisabled = false;
  }

  public deleteCurrentUser(): void {
    const key: string = 'id';
    this.firedOff.emit(true);
    this.btnDisabled = true;
    this.userService
      .deleteUser(JSON.parse(cookies.getCookie('user'))[key])
      .subscribe(
        (): void => {
          this.isErrorDeleting.emit(false);
          this.loading.emit(false);
          this.router.navigate(['/', 'home']);
          AuthService.logout();
        },
        (err: JSONObject): void => {
          this.btnDisabled = false;
          this.loading.emit(false);
          this.firedOff.emit(false);
          this.isErrorDeleting.emit(true);
          logger.error(err);
        }
      );
    this.closeModal();
  }
  private closeModal(): void {
    this.modal.close('Ok click');
  }
}
