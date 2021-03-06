import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ShowcaseJumbotronComponent } from './showcase-jumbotron/showcase-jumbotron.component';
import { SplashCarouselComponent } from './splash-carousel/splash-carousel.component';
import { InfoAccordionComponent } from './info-accordion/info-accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgbModule, DirectivesModule],
  declarations: [
    HomeComponent,
    ShowcaseJumbotronComponent,
    SplashCarouselComponent,
    InfoAccordionComponent
  ]
})
export class HomeModule {}
