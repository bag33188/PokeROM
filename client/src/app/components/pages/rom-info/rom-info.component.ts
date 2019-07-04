import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import he from 'he';
import { RomsService } from '../../../services/roms.service';
import { AuthService } from '../../../services/auth.service';
import Rom from '../../../models/Rom';

@Component({
  selector: 'app-rom-info',
  templateUrl: './rom-info.component.html',
  styleUrls: ['./rom-info.component.scss']
})
export class RomInfoComponent implements OnInit, AfterContentInit {
  rom: Rom = {
    orderNumber: null,
    gameName: null,
    fileSize: null,
    generation: null,
    dateReleased: null,
    fileType: null,
    genre: null,
    description: null,
    downloadLink: null,
    region: null,
    logoUrl: null,
    boxArtUrl: null,
    fileName: null,
    platform: null
  };
  id: string = this.activatedRoute.snapshot.url[2].path;

  constructor(
    private romService: RomsService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.romService.getRom(this.id).subscribe(
      (rom: Rom): void => {
        if (!rom.genre) {
          rom.genre = 'N/A';
        }
        rom.description = he.decode(rom.description);
        this.rom = rom;
      },
      (err: any): never => {
        throw err;
      }
    );
  }

  ngAfterContentInit() {
    window.scrollTo(0, 0);
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
