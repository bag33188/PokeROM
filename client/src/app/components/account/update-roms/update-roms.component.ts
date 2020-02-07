import { Component, OnInit, OnDestroy } from '@angular/core';
import { RomsService } from '../../../services/roms.service';
import {
  Observable,
  Subscription,
  PartialObserver,
  ErrorObserver,
  CompletionObserver,
  zip
} from 'rxjs';
import { delay, take, first } from 'rxjs/operators';
import { JSONObject } from '../../../models/JSONObject';
import { Rom } from '../../../models/Rom';
import { LoggerService as logger } from '../../../services/logger.service';
import {
  IconDefinition,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-regular-svg-icons';
import { fadeInAnimation } from '../../../animations';

type romsDuo = [Array<Rom>, Array<Rom>];

@Component({
  selector: 'account-update-roms',
  templateUrl: './update-roms.component.html',
  styleUrls: ['./update-roms.component.scss'],
  animations: [fadeInAnimation]
})
export class UpdateRomsComponent implements OnInit, OnDestroy {
  private deleteRomsObs$: Observable<JSONObject>;
  private addRomsObs$: Observable<romsDuo>;
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
    this.deleteRomsObs$ = this.romsService.deleteAllRoms().pipe(
      first(),
      delay(442)
    );
    this.addRomsObs$ = zip(
      this.romsService.addCoreRoms().pipe(
        take(1),
        delay(442)
      ),
      this.romsService.addRomHacks().pipe(
        take(1),
        delay(442)
      )
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
    const observer:
      | ErrorObserver<JSONObject>
      | CompletionObserver<JSONObject> = {
      error: (err: JSONObject): void => {
        this.loading = false;
        this.romsUpdated = false;
        logger.error(err);
      },
      complete: (): void => addRomsCallback()
    };
    this.deleteRomsSub = this.deleteRomsObs$.subscribe(
      observer as PartialObserver<JSONObject>
    );
  }

  private addRoms(): void {
    const observer: ErrorObserver<romsDuo> | CompletionObserver<romsDuo> = {
      error: (err: JSONObject): void => {
        this.loading = false;
        logger.error(err);
      },
      complete: (): void => {
        this.romsUpdated = true;
        this.loading = false;
      }
    };
    this.addRomsSub = this.addRomsObs$.subscribe(observer as PartialObserver<
      romsDuo
    >);
  }
}
