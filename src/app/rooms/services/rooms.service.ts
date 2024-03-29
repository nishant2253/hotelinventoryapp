import { Injectable } from '@angular/core';
import { Roomlist } from '../rooms';
import {environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../appconfig/appconfig.service';
import { AppConfig } from 'src/app/appconfig/appconfig.interface';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomlist:Roomlist[]=[
]

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,private http:HttpClient) {
    
  
    console.log(this.config.apiendpoint);
    console.log('rooms service intialized...');
  }
  getRooms() {
    return this.http.get<Roomlist[]>('/api/rooms')
  }
}
