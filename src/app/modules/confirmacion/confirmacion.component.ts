import { Component, OnInit } from '@angular/core';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css'],
})
export class ConfirmacionComponent implements OnInit {
  cols = 20; // número de columnas
  rows = 20; // número de filas
  blocks: { bgPosition: string; delay: number; duration: number }[] = [];
  constructor(public publicService: PublicService) {
    if (!this.publicService.isPlaying()) this.publicService.playAudio();
  }

  ngOnInit() {
    this.generateBlocks();
  }

  generateBlocks() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.blocks.push({
          bgPosition: `${(x / (this.cols - 1)) * 100}% ${
            (y / (this.rows - 1)) * 100
          }%`,
          delay: (x + y) * 0.05, // tiempo de retraso progresivo
          duration: Math.random() * 2 + 1,
        });
      }
    }
  }
}
