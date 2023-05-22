import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  
  @ViewChild('searchInput') text!: ElementRef<HTMLInputElement>;
  @Output() searchEvent: EventEmitter <String> = new EventEmitter();
  @Input() term: String = "";
  
  searched = () =>{
    if(this.text.nativeElement.value.trim().length>=20){this.text.nativeElement.value="";}
    this.searchEvent.emit(this.text.nativeElement.value);  
  }

}
