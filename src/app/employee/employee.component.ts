import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { Self } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //providers:[RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName:string="John"

  constructor( private roomservice : RoomsService) { }

  ngOnInit(): void {
  }

}
