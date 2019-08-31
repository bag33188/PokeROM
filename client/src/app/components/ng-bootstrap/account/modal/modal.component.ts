import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../../services/auth.service';
import { LoggerService as logger } from '../../../../services/logger.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public isErrorDeleting: boolean;
  @Input() public username: string;

  constructor(
    public modal: NgbActiveModal,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isErrorDeleting = false;
  }
  public deleteCurrentUser(): void {
    const key: string = 'id';
    this.userService
      .deleteUser(JSON.parse(localStorage.getItem('user'))[key])
      .pipe(take(1))
      .subscribe(
        (): void => {
          this.isErrorDeleting = false;
          this.router.navigate(['/', 'home']);
          AuthService.logout();
        },
        (err: any): void => {
          this.isErrorDeleting = true;
          logger.error(err);
        }
      );
    this.closeModal();
  }
  private closeModal(): void {
    this.modal.close('Ok click');
  }
}