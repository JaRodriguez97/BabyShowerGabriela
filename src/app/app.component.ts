import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GabrielaHadas';

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {
    if (this.publicService.isBrowser) {
      document.addEventListener(
        'visibilitychange',
        this.handleVisibilityChange
      );
    }
  }

  ngOnDestroy(): void {
    if (this.publicService.isBrowser) {
      document.removeEventListener(
        'visibilitychange',
        this.handleVisibilityChange
      );
    }
  }

  handleVisibilityChange = () => {
    if (document.hidden) this.publicService.pauseAudio();
    else this.publicService.playAudio();
  };

  @HostListener('window:blur')
  onWindowBlur() {
    this.publicService.pauseAudio();
  }

  @HostListener('window:focus')
  onWindowFocus() {
    this.publicService.playAudio();
  }

  @HostListener('window:beforeunload')
  onWindowBeforeUnload() {
    this.publicService.pauseAudio();
  }
}
