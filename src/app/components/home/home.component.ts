import { Component } from '@angular/core';
import { Gifs } from 'src/app/interface/gifs.interface';
import { GetGifsService } from 'src/app/services/getGifs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  term: string = "";
  historial: string[] = [];
  images: Gifs[] = [];

  constructor(private gifService: GetGifsService){}

  setTermClean = (term: any) =>{
    this.getSearchTerm(term);
  }
  
  getSearchTerm = (term: any) =>{
    this.term = term;
    this.gifService.setHistorial(term);
    this.historial = this.gifService.Historial;
    this.gifService.getGifs(term).subscribe((resp: any) => this.images = resp.data);
  }

  

  

}
