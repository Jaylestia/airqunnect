import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'AJ Magoncia', picture: 'assets/images/aj.jpg' },
    eva: { name: 'Niel Capistrano', picture: 'assets/images/niel.jpg  ' },
    jack: { name: 'Lorden Nigel Palahang', picture: 'assets/images/lorden.jpg' },
    lee: { name: 'Via Duallo', picture: 'assets/images/via.jpg' },
    alan: { name: 'Wilsean Yap', picture: 'assets/images/wilsean.jpg' },
    kate: { name: 'Elizalde Ramos', picture: 'assets/images/elizalde.jpg' },
      aj: { name: 'AJ Magoncia', picture: 'assets/images/aj.jpg' },
      niel: { name: 'Niel Capistrano', picture: 'assets/images/niel.jpg  ' },
      lorden: { name: 'Lorden Nigel Palahang', picture: 'assets/images/lorden.jpg' },
      via: { name: 'Via Duallo', picture: 'assets/images/via.jpg' },
      wilsean: { name: 'Wilsean Yap', picture: 'assets/images/wilsean.jpg' },
      dzal: { name: 'Elizalde Ramos', picture: 'assets/images/elizalde.jpg' },
      just: { name: 'Justine Fabria', picture: 'assets/images/justine.jpg' },
      mark: { name: 'Mark Dajao', picture: 'assets/images/mark.jpg' },
      diane: { name: 'Diane Balberan', picture: 'assets/images/diane.jpg' },
      jeric: { name: 'Jeric Lumantas', picture: 'assets/images/jeric.jpg' },
      aira: { name: 'Aira Ducos', picture: 'assets/images/aira.jpg' },
      jaymi: { name: 'Jaymi Ipanag', picture: 'assets/images/jaymi.jpg' },
      lloyd_senpai: { name: 'Lloyd Jhon B. Estampa',
          picture: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/14572282_1237747009579163_1714172941126920696_n.jpg?oh=925677c104797ba0d80ce082a3dd5634&oe=5B1554BE' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
