import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ListService {
  constructor() {}

  list: string[] = ["book", "ball", "bat"];
  masterList = new BehaviorSubject<string[]>(this.list);

  getList() {
    return this.masterList.asObservable();
  }

  addToList() {
    this.list.push("hello")
    this.masterList.next(this.list);
  }

  removeFromList() {
    this.list.pop();
    this.masterList.next(this.list);
  }
}



