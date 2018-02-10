import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../@core/data/users.service';


@Component({
  selector: 'ngx-chartjs',
  styleUrls: ['./chartjs.component.scss'],
  templateUrl: './chartjs.component.html',
})
export class ChartjsComponent implements OnInit {

    contacts_stationary: any[];
    contacts_handheld: any[];
    contacts_webapp: any[];
    user: any;

    constructor(private userService: UserService) {
    }

    ngOnInit() {

        this.userService.getUsers()
            .subscribe((users: any) => {
                this.contacts_stationary = [
                    {user: users.just, type: 'mobile'},
                    {user: users.mark, type: 'home'},
                    {user: users.diane, type: 'mobile'},
                    {user: users.jeric, type: 'mobile'},
                    {user: users.aira, type: 'home'},
                    {user: users.jaymi, type: 'work'},
                ];
            });

        this.userService.getUsers()
            .subscribe((users: any) => {
                this.contacts_handheld = [
                    {user: users.via, type: 'mobile'},
                    {user: users.wilsean, type: 'home'},
                    {user: users.dzal, type: 'work'},
                ];
            });

        this.userService.getUsers()
            .subscribe((users: any) => {
                this.contacts_webapp = [
                    {user: users.aj, type: 'mobile'},
                    {user: users.niel, type: 'home'},
                    {user: users.lorden, type: 'mobile'},
                ];
            });
    }
}






