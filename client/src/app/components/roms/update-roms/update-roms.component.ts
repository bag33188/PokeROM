import { Component, OnInit, OnDestroy } from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import { Observable, Subscription, zip } from 'rxjs';
import { delay } from 'rxjs/operators';
import { JSONObject } from '../../../models/JSONObject';
import { Rom } from '../../../models/Rom';
import { LoggerService as logger } from '../../../services/logger.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-roms',
  templateUrl: './update-roms.component.html',
  styleUrls: ['./update-roms.component.scss']
})
export class UpdateRomsComponent implements OnInit, OnDestroy {
  private deleteRomsObs$: Observable<JSONObject>;
  private addRomsObs$: Observable<[Rom[], Rom[]]>;
  private addRomsSub: Subscription;
  private deleteRomsSub: Subscription;
  public romsUpdated: boolean;
  public loading: boolean;
  public showBtn: boolean;
  public faCheckCircle: IconDefinition;
  public faExclamationTriangle: IconDefinition;
  constructor(private romsService: RomsService) {}

  ngOnInit(): void {
    this.faExclamationTriangle = faExclamationTriangle;
    this.faCheckCircle = faCheckCircle;
    this.showBtn = true;
    this.loading = false;
    this.deleteRomsObs$ = this.romsService.deleteAllRoms();
    this.addRomsObs$ = zip(
      this.romsService.addCoreRoms().pipe(delay(800)),
      this.romsService.addRomHacks().pipe(delay(800))
    );
  }

  ngOnDestroy(): void {
    if (this.romsUpdated) {
      this.deleteRomsSub.unsubscribe();
      this.addRomsSub.unsubscribe();
    }
  }

  public updateRoms(): void {
    this.showBtn = false;
    this.loading = true;
    let deleteSuccess: boolean;
    let addSuccess: boolean;
    this.deleteRomsSub = this.deleteRomsObs$.subscribe(
      (): true => (deleteSuccess = true),
      (err: JSONObject): void => {
        this.loading = false;
        deleteSuccess = false;
        logger.error(err);
      },
      (): void => {
        this.addRomsSub = this.addRomsObs$.subscribe(
          (): true => (addSuccess = true),
          (err: JSONObject): void => {
            this.loading = false;
            addSuccess = false;
            logger.error(err);
          },
          (): void => {
            this.romsUpdated = deleteSuccess && addSuccess;
            this.loading = false;
          }
        );
      }
    );
  }
}
