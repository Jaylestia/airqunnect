import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    showArticle: boolean;
    read = 'Read More';
    constructor() {
        this.showArticle = false;
    }
    ToggleShowArticle() {
        this.showArticle = !this.showArticle;
        if (this.showArticle === false)
        this.read = 'Read More';
        else {
          this.read = 'Hide News'
        }
    }
}
