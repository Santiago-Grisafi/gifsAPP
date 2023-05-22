import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() searchArray: string [] = [];
  @Output() sentTerm : EventEmitter<String> = new EventEmitter();

  sendTerm = (term: any) =>{
    this.sentTerm.emit(term);
  }
}
