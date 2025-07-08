import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(public route: Router, public publicService: PublicService) {}

  ngOnInit(): void {
    if (!this.publicService.isPlaying()) this.publicService.playAudio();

    setTimeout(() => this.route.navigate(['marco']), 10000);
  }
}
