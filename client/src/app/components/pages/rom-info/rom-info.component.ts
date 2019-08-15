import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  faLongArrowAltLeft,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import he from 'he';
import { RomsService } from '../../../services/roms.service';
import { AuthService } from '../../../services/auth.service';
import { Rom } from '../../../models/Rom';

@Component({
  selector: 'app-rom-info',
  templateUrl: './rom-info.component.html',
  styleUrls: ['./rom-info.component.scss']
})
export class RomInfoComponent implements OnInit, AfterContentInit {
  public rom: Rom;
  private id: string;
  public loading: boolean = true;
  public isError: boolean;
  public faLongArrowAltLeft: IconDefinition;

  constructor(
    private romService: RomsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.faLongArrowAltLeft = faLongArrowAltLeft;
    this.id = this.route.snapshot.paramMap.get('id');
    this.isError = false;
    this.rom = {
      order_number: 0,
      rom_type: '',
      game_name: '',
      file_size: 0,
      generation: 0,
      date_released: new Date(),
      file_type: '',
      genre: '',
      description: '',
      download_link: '',
      region: '',
      logo_url: '',
      box_art_url: '',
      file_name: '',
      platform: '',
      is_favorite: false
    };
    this.getRom(this.id);
  }

  ngAfterContentInit(): void {
    window.scrollTo(0, 0);
  }

  private getRom(id: string): void {
    this.romService.getRom(id).subscribe(
      (rom: Rom): void => {
        const { game_name, description, genre }: Rom = rom;
        if (!genre) {
          rom.genre = 'N/A';
        }
        rom.game_name = he.decode(game_name);
        rom.description = he.decode(description);
        this.rom = rom;
        this.loading = false;
        this.isError = false;
      },
      (err: any): never => {
        this.loading = false;
        this.isError = true;
        const errKey: string = 'status';
        if (err[errKey]) {
          if (err[errKey] === 404) {
            this.router.navigate(['/', '404', this.id]);
          }
        }
        throw err;
      }
    );
  }
}
