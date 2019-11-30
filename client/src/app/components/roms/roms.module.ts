import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RomComponent } from './rom/rom.component';
import { GameSpecsComponent } from './rom-info/game-specs/game-specs.component';
import { GameDescriptionComponent } from './rom-info/game-description/game-description.component';
import { GameLogoComponent } from './rom-info/game-logo/game-logo.component';
import { GameNameComponent } from './rom-info/game-name/game-name.component';
import { RomSpecsComponent } from './rom-info/rom-specs/rom-specs.component';
import { RomDownloadComponent } from './rom-info/rom-download/rom-download.component';
import { UnitConversionService } from '../../services/unit-conversion.service';
import { DirectivesModule } from '../../directives/directives.module';
import { UpdateRomsComponent } from '../account/update-roms/update-roms.component';
import { RomsService } from '../../services/roms.service';
import { SpinnerModule } from '../spinners/spinner.module';
import { RomsRoutingModule } from './roms-routing.module';

@NgModule({
  declarations: [
    RomComponent,
    GameDescriptionComponent,
    GameSpecsComponent,
    GameLogoComponent,
    GameNameComponent,
    RomSpecsComponent,
    RomDownloadComponent,
    UpdateRomsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    DirectivesModule,
    SpinnerModule,
    RomsRoutingModule
  ],
  providers: [UnitConversionService, RomsService]
})
export class RomsModule {}
