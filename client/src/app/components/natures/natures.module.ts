import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturesComponent } from './natures.component';
import { NaturesRoutingModule } from './natures-routing.module';
import { NaturesService } from '../../services/natures.service';
import { SpinnerModule } from '../spinners/spinner.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    NaturesRoutingModule,
    SpinnerModule,
    FontAwesomeModule
  ],
  declarations: [NaturesComponent],
  providers: [NaturesService]
})
export class NaturesModule {}
