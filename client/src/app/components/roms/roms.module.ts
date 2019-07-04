import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RomComponent } from './rom/rom.component';
import { GameSpecsComponent } from './rom-info/game-specs/game-specs.component';
import { GameDescriptionComponent } from './rom-info/game-description/game-description.component';
import { GameLogoComponent } from './rom-info/game-logo/game-logo.component';
import { GameDownloadComponent } from './rom-info/game-download/game-download.component';
import { GameNameComponent } from './rom-info/game-name/game-name.component';
import { RomSpecsComponent } from './rom-info/rom-specs/rom-specs.component';

@NgModule({
  declarations: [
    RomComponent,
    GameDescriptionComponent,
    GameSpecsComponent,
    GameLogoComponent,
    GameDownloadComponent,
    GameNameComponent,
    RomSpecsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    NgbModule
  ],
  exports: [
    RomComponent,
    GameDescriptionComponent,
    GameSpecsComponent,
    GameDownloadComponent,
    GameDescriptionComponent,
    GameLogoComponent,
    GameNameComponent,
    RomSpecsComponent
  ]
})
export class RomsModule { }
