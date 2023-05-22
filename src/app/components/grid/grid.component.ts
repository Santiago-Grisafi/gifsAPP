import { Component, Input } from '@angular/core';
import { Datum, Gifs } from 'src/app/interface/gifs.interface';
import { GetGifsService } from 'src/app/services/getGifs.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  constructor(private getGifService: GetGifsService){
    console.log(this.images);
  }

  @Input() images: Gifs[] = [];
}


