import { Injectable } from '@angular/core';
import { MainList } from '../models/products-models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mainLists: MainList[] = [
    { 
      id: 1,
      mainTitle: 'MainList 1',
      subList: [{
        id: 1,
        subTitle: "Sub Title",
        subDescription: "Lorem Ipsum is simply dummy text"
      }]
    },
    { 
      id: 2,
      mainTitle: 'MainList 2',
      subList: [{
        id: 1,
        subTitle: "Sub Title",
        subDescription: "Lorem Ipsum is simply dummy text"
      }]
    },
    { 
      id: 3,
      mainTitle: 'MainList 3',
      subList: [{
        id: 1,
        subTitle: "Sub Title",
        subDescription: "Lorem Ipsum is simply dummy text"
      }]
    }
  ];

  constructor(private http: HttpClient) {
  }
  getMainLists() {
    return this.mainLists;
  }
  deleteMainList(id: number){
    return this.mainLists.splice(id,1);
  }
  deleteSubList(id: number, subid: number){
    return this.mainLists[id].subList.splice(subid,1);
  }
}
