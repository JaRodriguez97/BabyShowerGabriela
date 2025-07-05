import { Router } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class PublicService {
  private audio!: HTMLAudioElement;

  constructor(
    public route: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio();
      this.audio.src = '../assets/audio.mp3';
      this.audio.volume = 0.2;
    }
  }

  playAudio() {
    if (isPlatformBrowser(this.platformId))
      this.audio.play().catch((error) => {
        if (
          error.name === 'NotAllowedError' &&
          error.code === 0 &&
          error.message ===
            "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
        )
          this.route.navigate(['splash']);
        else console.error('Error al reproducir el audio:', error);
      });
  }

  pauseAudio() {
    if (isPlatformBrowser(this.platformId)) this.audio.pause();
  }

  isPlaying(): boolean {
    if (isPlatformBrowser(this.platformId))
      return !this.audio.paused && this.audio.currentTime > 0;

    return false;
  }
}
