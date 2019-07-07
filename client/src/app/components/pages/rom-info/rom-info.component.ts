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
  rom: Rom;
  id: string = this.activatedRoute.snapshot.url[2].path;

  constructor(
    private romService: RomsService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rom = {
      orderNumber: 0,
      gameName: '',
      fileSize: 0,
      generation: 0,
      dateReleased: new Date(),
      fileType: '',
      genre: '',
      description: '',
      downloadLink: '',
      region: '',
      logoUrl: '',
      boxArtUrl: '',
      fileName: '',
      platform: ''
    };
    this.getRom(this.id);
  }

  getRom(id: string): void {
    this.romService.getRom(id).subscribe(
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
