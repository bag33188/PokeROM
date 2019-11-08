import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgBootstrapModule } from '../ng-bootstrap/ng-bootstrap.module';
import { RomComponent } from './rom/rom.component';
import { GameSpecsComponent } from './rom-info/game-specs/game-specs.component';
import { GameDescriptionComponent } from './rom-info/game-description/game-description.component';
import { GameLogoComponent } from './rom-info/game-logo/game-logo.component';
import { GameNameComponent } from './rom-info/game-name/game-name.component';
import { RomSpecsComponent } from './rom-info/rom-specs/rom-specs.component';
import { RomDownloadComponent } from './rom-info/rom-download/rom-download.component';
import { UnitConversionService } from '../../services/unit-conversion.service';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    RomComponent,
    GameDescriptionComponent,
    GameSpecsComponent,
    GameLogoComponent,
    GameNameComponent,
    RomSpecsComponent,
    RomDownloadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgBootstrapModule,
    FontAwesomeModule,
    DirectivesModule
  ],
  exports: [
    RomComponent,
    GameDescriptionComponent,
    GameSpecsComponent,
    GameDescriptionComponent,
    GameLogoComponent,
    GameNameComponent,
    RomSpecsComponent,
    RomDownloadComponent
  ],
  providers: [UnitConversionService]
})
export class RomsModule {}
