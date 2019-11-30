import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NaturesComponent } from './natures.component';
import { NaturesRoutingModule } from './natures-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, NaturesRoutingModule],
  declarations: [NaturesComponent]
})
export class NaturesModule {}
