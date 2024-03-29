import { Component, OnInit, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Roomlist } from '../rooms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges,OnDestroy {
  @Input() rooms: Roomlist[] = [];
  @Output() selectedRoom =  new EventEmitter<Roomlist>(); 
  @Input() title:string = "";

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  selectRoom(room: Roomlist){
    this.selectedRoom.emit(room);
  }
  ngOnDestroy(): void {
    console.log("destroyed is called");
  }

}
