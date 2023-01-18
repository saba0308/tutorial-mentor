import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  public falseToTrue = new BehaviorSubject<boolean>(false);

  setBooleanToTrue(valueChange: boolean) {
    this.falseToTrue.next(valueChange);
  }

  getBooleanValue() {
    return this.falseToTrue.asObservable();
  }

}