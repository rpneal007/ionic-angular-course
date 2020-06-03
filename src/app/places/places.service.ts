import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 
    'Branson Cabin', 
    'Secluded cabin in Branson.',
    'https://images.squarespace-cdn.com/content/v1/5031a37b24ac2660dceab36d/1475937207170-H2NO71JYV79PSQY1Y33S/ke17ZwdGBToddI8pDm48kCHChmuivJZ1Va5ov3ZJeg17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYcSGirBhY_3j1yQtntvGS73bypqQ-qjSV5umPUlGbQFAw/Branson_Bear_Back_Deck.jpg?format=2500w', 
    299.99),
    new Place('p2', 
    'Eureka Springs getaway', 
    'Victorian home in the middle of Eureka Srpings.',
    'https://i.pinimg.com/236x/ab/d2/f9/abd2f97ac80ef245f58fc3abf3efaadc--eureka-springs-arkansas-guest-ranch.jpg', 
    199.99)

  ];

  private _offers: Place[] = [
    new Place('p1', 
    'Branson Cabin', 
    'Secluded cabin in Branson.',
    'https://traveloffice.org/wp-content/uploads/2018/09/stonebridge-cabins.jpg', 
    299.99),
    new Place('p2', 
    'Eureka Springs getaway', 
    'Victorian home in the middle of Eureka Srpings.',
    'https://i.pinimg.com/236x/ab/d2/f9/abd2f97ac80ef245f58fc3abf3efaadc--eureka-springs-arkansas-guest-ranch.jpg', 
    199.99)

  ];
  
  get offers() {
    return [...this._offers];
  }


  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(
      p => p.id === id
    )};

  }

  constructor() { }
}
