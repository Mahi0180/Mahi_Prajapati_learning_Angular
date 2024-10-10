import { Injectable } from '@angular/core';
import{noodlesList} from "../Data/mock-content";
import { Observable ,of} from 'rxjs';
import {Noodles} from "../models/noodles"

@Injectable({
  providedIn: 'root'
})
export class NoodleService {
  private noodles :Noodles[] = noodlesList;

  constructor() { }
  getnoodles() : Observable<Noodles[]>{
    return of(noodlesList);
  }
  addnoodle(newNoodle:Noodles): Observable<Noodles[]>{
    this.noodles.push(newNoodle);
    return of(this.noodles);
  }
  updateNoodle(updateNoodle: Noodles): Observable<Noodles[]>{
    const index = this.noodles.findIndex(noodlesList => noodlesList.id === updateNoodle.id);
    if(index ==  -1) {
      this.noodles[index] = updateNoodle;
    }
    return of(this.noodles);
  }
  deleteNoodle(noodleId:number): Observable<Noodles[]>{
    this.noodles =this.noodles.filter(noodle => noodle.id !== noodle.id);
    return of(this.noodles);
  }
  getNoodleById(noodleId:number): Observable<Noodles |undefined>{
    const noodles = this.noodles.find(noodle => noodle.id === noodle.id);
    return of(noodles);
  }

}
