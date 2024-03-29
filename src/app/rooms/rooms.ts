export interface Room{
    availableRooms?:number;
    bookedRooms?:number;
    totalRooms?:number;
}
export interface Roomlist{
    roomnumber?:string,
    roomType: string,
    amenties:string,
    price:number,
    photos:string,
    checkintime:Date,
    checkouttime:Date,
    rating :number

}