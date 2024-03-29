import { AfterContentChecked, AfterViewInit, Component, OnInit, ElementRef, ViewChild , ViewContainerRef, Optional, Injectable} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { OptionalDecorator} from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = "hotelinventory";
  @ViewChild('name',{static:true}) name!: ElementRef;
  constructor(@Optional() private loggerService:LoggerService,@Inject (localStorageToken) private localStorage:Storage){}
  ngOnInit(): void {
    this.loggerService?.Log("AppComponent.ngoninit()");
    this.name.nativeElement.innerText="hilton hotel";
    this.localStorage.setItem('name','hilton');
  }
  //role = 'admin';
//   @ViewChild('user',{read: ViewContainerRef }) vcr!: ViewContainerRef;
//   ngAfterViewInit() {
//     const componentRef = this.vcr.createComponent(RoomsComponent);
//     componentRef.instance.numberofrooms = 50;
//   }
 }
