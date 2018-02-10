import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'Jaymi setting up the module',
    source: 'assets/stationary-images/doc-a.1.jpg',
  }, {
    title: 'Data Gathering',
    source: 'assets/stationary-images/doc-a.2.jpg',
  }, {
    title: 'Taking a picture after data gathering',
    source: 'assets/stationary-images/doc-a.3.jpg',
  }, {
    title: 'Troubleshoot and setup',
    source: 'assets/stationary-images/doc-a.4.jpg',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
