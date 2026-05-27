import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Menu {

  public isOpen = new BehaviorSubject<boolean>(false);
  public opened = true;

  public toggle() {
    this.opened = !this.opened;
    this.isOpen.next(this.opened);
  }

  
}
