import { Component, Input, OnInit } from '@angular/core';
import { RomsService } from '../../../../services/roms.service';
import { JSONObject } from '../../../../models/JSONObject';
import { Rom } from '../../../../models/Rom';
import { LoggerService as logger } from '../../../../services/logger.service';
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'roms-info-mark-favorite',
  templateUrl: './mark-favorite.component.html',
  styleUrls: ['./mark-favorite.component.scss']
})
export class MarkFavoriteComponent implements OnInit {
  @Input() public isFavorite: boolean;
  @Input() private id: string;
  public faStar: IconDefinition;
  public label: string;

  constructor(private romsService: RomsService) {}

  public ngOnInit(): void {
    this.label = 'Mark as Favorite';
    this.faStar = faStar;
  }

  public patchRomFavorite(): void {
    const partialRom: { is_favorite: boolean } = {
      is_favorite: !this.isFavorite
    };
    // toggle on UI
    this.isFavorite = partialRom.is_favorite;
    // toggle on server
    this.romsService
      // tslint:disable-next-line:whitespace
      .patchRom(this.id, (<unknown>partialRom) as JSONObject)
      .subscribe(
        (res: Rom): void => {
          // check for UI/server mismatch
          if (this.isFavorite !== res.is_favorite) {
            this.isFavorite = res.is_favorite;
          }
        },
        (err: JSONObject): void => logger.error(err)
      );
  }
}
