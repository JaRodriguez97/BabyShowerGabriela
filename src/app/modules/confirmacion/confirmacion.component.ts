import { Component } from '@angular/core';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css'],
})
export class ConfirmacionComponent {
  constructor(public publicService: PublicService) {
    if (!this.publicService.isPlaying()) this.publicService.playAudio();
  }
}
