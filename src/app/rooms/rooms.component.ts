import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room } from './rooms';
import { Roomlist } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { QueryList } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { SkipSelfDecorator } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked {
  hotelname = "oberoi hotel"
  numberofrooms = 20;
  hiderooms= false;
  selectedRoom!: Roomlist;
  rooms: Room = {
    availableRooms:10,
    bookedRooms:5,
    totalRooms:20
  }
  title="Rooms List";
   roomlist : Roomlist[] = [
    //{
//     roomnumber:101,
//     roomType:'Deluxe Room',
//     amenties:'Air conditioner,Free wifi,TV,Bathroom,Kitchen',
//     price:500,
//     photos:'https://unsplash.com/photos/a-person-standing-on-top-of-a-sand-dune-brFQojtwSzE',
//     checkintime:new Date ('11-nov-2021'),
//     checkouttime:new Date('12-nov-2012'),
//     rating:4.5
//   }
// ,{
//   roomnumber:102,
//   roomType:'Premium Room',
//   amenties:'Air conditioner,Free wifi,TV,Bathroom,Kitchen', 
//   price:1000,
//   photos:'https://unsplash.com/photos/a-person-standing-on-top-of-a-sand-dune-brFQojtwSzE',
//   checkintime:new Date ('11-nov-2021'),
//   checkouttime:new Date('12-nov-2012'),
//   rating:3.4
// },
//  {
//   roomnumber:103,
//   roomType:'Luxury Room',
//  amenties:'Air conditioner,Free wifi,TV,Bathroom,Kitchen',
//  price:2000,
//  photos:'https://unsplash.com/photos/a-person-standing-on-top-of-a-sand-dune-brFQojtwSzE',
//  checkintime:new Date ('11-nov-2021'),
//  checkouttime:new Date('12-nov-2012'),
//  rating:2.6
//  },
//  {
//   roomnumber:104,
//   roomType:'Suite Room',
//   amenties:'Air conditioner,Free wifi,TV,Bathroom,Kitchen',
//   price:3000,
//   photos:'https://unsplash.com/photos/a-person-standing-on-top-of-a-sand-dune-brFQojtwSzE',
//   checkintime:new Date ('11-nov-2021'),
//   checkouttime:new Date('12-nov-2012'),
//   rating:2
//  }
]
stream= new Observable(observer => {
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
  //observer.error('error');
})
 @ViewChild(HeaderComponent) HeaderComponent!:HeaderComponent
 @ViewChildren(HeaderComponent) HeaderChildrenComponents!: QueryList<HeaderComponent>

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    })
    this.stream.subscribe((data) => console.log(data))
    this.roomsService.getRooms().subscribe(
      rooms => this.roomlist=rooms
    );
    
    
  }
  ngDoCheck(): void {
    console.log("on change called");
  }
  ngAfterViewInit(): void {
    this.HeaderComponent.title="Rooms view";
    this.HeaderChildrenComponents.last.title="last title"; 
  }
  ngAfterViewChecked(): void {
    
  }
  toggle(){
    this.hiderooms=!this.hiderooms;
    this.title='Rooms List';
  };
  selectRoom(room:Roomlist){
    this.selectedRoom=room;
  }
  addRoom(){
    const room: Roomlist={
      roomnumber:'105',
      roomType:'Deluxe Room',
      amenties:'Air conditioner,Free wifi,TV,Bathroom,Kitchen',
      price:500,
      photos:'https://unsplash.com/photos/a-person-standing-on-top-of-a-sand-dune-brFQojtwSzE',
      checkintime:new Date ('11-nov-2021'),
      checkouttime:new Date('12-nov-2012'),
      rating:4.5
    }
    //this.roomlist.push(room)
    this.roomlist = [...this.roomlist,room];
    
  }
  // ngOnDestroy(): void {
  //   console.log("destroyed is called");
  // }

}
