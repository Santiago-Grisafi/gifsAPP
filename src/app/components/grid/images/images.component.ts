import { Component, Input } from '@angular/core';
import { Datum, Gifs, Images } from 'src/app/interface/gifs.interface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  @Input() image: any = {};

}
