import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  constructor() { }

  getData(): string[] {
    let items: string[] = [];
    for (let i = 0; i < 10; i++) {
      items.push(`Item ${i + 1}`);
    }
    return items;
  }

}
