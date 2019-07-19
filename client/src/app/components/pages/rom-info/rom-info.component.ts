import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faBackspace, IconDefinition } from '@fortawesome/free-solid-svg-icons';
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
  id: string;
  loading: boolean;
  isError: boolean;
  faBackspace: IconDefinition;

  constructor(
    private romService: RomsService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.faBackspace = faBackspace;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loading = true;
    this.isError = false;
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
        this.loading = false;
        this.isError = true;
        this.router.navigate(['/', '404', this.id]);
        throw err;
      }
    );
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
