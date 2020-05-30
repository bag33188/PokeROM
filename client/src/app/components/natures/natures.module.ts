import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturesComponent } from './natures.component';
import { NaturesRoutingModule } from './natures-routing.module';
import { NaturesService } from '../../services/natures.service';
import { SpinnerModule } from '../spinners/spinner.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../../directives/directives.module';
import { NaturesTableComponent } from './natures-table/natures-table.component';

@NgModule({
  imports: [
    CommonModule,
    NaturesRoutingModule,
    SpinnerModule,
    FontAwesomeModule,
    DirectivesModule
  ],
  declarations: [NaturesComponent, NaturesTableComponent],
  providers: [NaturesService]
})
export class NaturesModule {}
