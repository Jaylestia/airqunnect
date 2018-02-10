import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
          {user: users.aj, type: 'AirCon'},
          {user: users.niel, type: 'AirCon'},
          {user: users.lorden, type: 'Aircon'},
          {user: users.via, type: 'Airasp'},
          {user: users.wilsean, type: 'Airasp'},
          {user: users.dzal, type: 'Airasp'},
            {user: users.just, type: 'Airmon'},
            {user: users.mark, type: 'Airmon'},
            {user: users.diane, type: 'Airmon'},
            {user: users.jeric, type: 'Airmon'},
            {user: users.aira, type: 'Airmon'},
            {user: users.jaymi, type: 'Airmon'},
        ];

        this.recent = [
          {user: users.lloyd_senpai, type: 'Adviser: AQMP System', time: ''},

        ];
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
