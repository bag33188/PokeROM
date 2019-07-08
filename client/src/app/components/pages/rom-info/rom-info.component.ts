import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
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
export class RomInfoComponent implements OnInit, AfterContentInit, DoCheck {
  rom: Rom;
  id: string = this.activatedRoute.snapshot.url[2].path;
  loading: boolean = true;
  isError: boolean = false;

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

  ngAfterContentInit() {
    window.scrollTo(0, 0);
  }

  ngDoCheck() {
    if (!this.loading && this.isError) {
      this.router.navigate(['/404', this.id]);
    }
  }

  getRom(id: string): void {
    this.romService.getRom(id).subscribe(
      (rom: Rom): void => {
        if (!rom.genre) {
          rom.genre = 'N/A';
        }
        rom.description = he.decode(rom.description);
        this.rom = rom;
        this.loading = false;
        this.isError = false;
      },
      (err: any): never => {
        console.log('fdsfdsfas');
        this.loading = false;
        this.isError = true;
        throw err;
      }
    );
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
