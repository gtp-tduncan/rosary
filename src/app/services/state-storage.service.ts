import { Injectable } from '@angular/core';
import { LiturgicalDates } from '../models/liturgical-dates';


@Injectable({
  providedIn: 'root'
})
export class StateStorageService {

  constructor() { }

  readonly language = new StringStorage('rosary.language');
  readonly liturgicalDates = new StateStorage<LiturgicalDates>('rosary.liturgical-dates');

}

class StringStorage {

  constructor(private key: string) { }

  get data(): string {
    const response = window.localStorage.getItem(this.key);
    return (response !== null) ? response : undefined;
  }

  set data(entry: string) {
    if (entry) {
      window.localStorage.setItem(this.key, entry);
    }
    else {
      window.localStorage.removeItem(this.key);
    }
  }

}

class StateStorage<T> {

  constructor(private key: string) { }

  get data(): T {
    let rawData = window.localStorage.getItem(this.key);

    try {
      if (rawData) {
        return JSON.parse(rawData) as T;
      }
    }
    catch (error) {
      // No action by design
    }

    return undefined;
  }

  set data(entry: T) {
    if (entry) {
      window.localStorage.setItem(this.key, JSON.stringify(entry));
    }
    else {
      window.localStorage.removeItem(this.key);
    }
  }

}