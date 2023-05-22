import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input() terms: string[] = [];
  @Output() sentTerm : EventEmitter<String> = new EventEmitter();

  sendTerm = (term: string) =>{
    this.sentTerm.emit(term);
  }

}
