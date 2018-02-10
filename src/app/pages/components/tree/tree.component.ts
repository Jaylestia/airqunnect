import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
})
export class TreeComponent {

  tree: TreeModel = {
    value: 'Programming tools and frameworks we used',
    children: [{
      value: 'Web Application',
      children: [{
        value: 'Angular JS Framework',
      }, {
        value: 'Javascript',
      }, {
        value: 'Typescript',
      }],
    }, {
      value: 'Mobile Application',
      children: [{
        value: 'Ionic Framework',
      }, {
        value: 'Javascript',
      }, {
        value: 'Java',
      }],
    }],
  };

}
