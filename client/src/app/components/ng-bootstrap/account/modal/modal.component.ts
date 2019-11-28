import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../services/auth.service';
import { LoggerService as logger } from '../../../../services/logger.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { JSONObject } from '../../../../models/JSONObject';
import { CookiesService } from '../../../../services/cookies.service';

@Component({
  selector: 'app-account-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() public isErrorDeleting: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() public loading: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Input() public username: string;
  @Output() public firedOff: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  public btnDisabled: boolean;

  constructor(
    public modal: NgbActiveModal,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.btnDisabled = false;
  }

  public deleteCurrentUser(): void {
    const key: string = 'id';
    this.firedOff.emit(true);
    this.btnDisabled = true;
    this.userService
      .deleteUser(JSON.parse(CookiesService.getCookie('user'))[key])
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
