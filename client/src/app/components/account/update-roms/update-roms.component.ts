import { Component, OnInit, OnDestroy } from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import { Observable, PartialObserver, Subscription, zip } from 'rxjs';
import { delay } from 'rxjs/operators';
import { JSONObject } from '../../../models/JSONObject';
import { Rom } from '../../../models/Rom';
import { LoggerService as logger } from '../../../services/logger.service';
import {
  IconDefinition,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-regular-svg-icons';
import { fadeInAnimation } from '../../../animations';

@Component({
  selector: 'account-update-roms',
  templateUrl: './update-roms.component.html',
  styleUrls: ['./update-roms.component.scss'],
  animations: [fadeInAnimation]
})
export class UpdateRomsComponent implements OnInit, OnDestroy {
  private deleteRomsObs$: Observable<JSONObject>;
  private addRomsObs$: Observable<[Array<Rom>, Array<Rom>]>;
  private addRomsSub: Subscription;
  private deleteRomsSub: Subscription;
  public romsUpdated: boolean;
  public loading: boolean;
  public showBtn: boolean;
  public faCheckCircle: IconDefinition;
  public faTimesCircle: IconDefinition;

  constructor(private romsService: RomsService) {}

  public ngOnInit(): void {
    this.faTimesCircle = faTimesCircle;
    this.faCheckCircle = faCheckCircle;
    this.showBtn = true;
    this.loading = false;
    this.deleteRomsObs$ = this.romsService.deleteAllRoms().pipe(delay(500));
    this.addRomsObs$ = zip(
      this.romsService.addCoreRoms().pipe(delay(1000)),
      this.romsService.addRomHacks().pipe(delay(1000))
    );
  }

  public ngOnDestroy(): void {
    if (this.romsUpdated) {
      this.deleteRomsSub.unsubscribe();
      this.addRomsSub.unsubscribe();
    }
  }

  public updateRoms(): void {
    this.showBtn = false;
    this.loading = true;
    this.deleteRoms(this.addRoms.bind(this, UpdateRomsComponent));
  }

  private deleteRoms(addRomsCallback: () => void): void {
    const observer: PartialObserver<JSONObject> = {
      error: (err: JSONObject): void => {
        this.loading = false;
        this.romsUpdated = false;
        logger.error(err);
      },
      complete: (): void => addRomsCallback()
    };
    this.deleteRomsSub = this.deleteRomsObs$.subscribe(observer);
  }

  private addRoms(): void {
    const observer: PartialObserver<[Array<Rom>, Array<Rom>]> = {
      error: (err: JSONObject): void => {
        this.loading = false;
        logger.error(err);
      },
      complete: (): void => {
        this.romsUpdated = true;
        this.loading = false;
      }
    };
    this.addRomsSub = this.addRomsObs$.subscribe(observer);
  }
}
