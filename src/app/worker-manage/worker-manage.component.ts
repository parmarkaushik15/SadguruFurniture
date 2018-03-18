import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-manage',
  templateUrl: './worker-manage.component.html'
})
export class WorkerManageComponent implements OnInit {
  isEdit: any = false;
  organization = [{
    'organizationName': 'Organization 1',
    'organizationEmail': 'org1@gmail.com',
    'organizationContact': '+91-9376666901',
    'organizationImage': '',
  }, {
    'organizationName': 'Organization 2',
    'organizationEmail': 'org2@gmail.com',
    'organizationContact': '+91-9376666902',
    'organizationImage': '',
  }, {
    'organizationName': 'Organization 3',
    'organizationEmail': 'org3@gmail.com',
    'organizationContact': '+91-9376666903',
    'organizationImage': '',
  }];

  ngOnInit() {
  }
  
  addOrEditRecord() {
    this.isEdit = true;
  }

  backRecord() {
    this.isEdit = false;
  }

  helloWorld(row) {
    console.log(row);
    console.log('hello from comoinent');
  }

  handleGridEvent(data) {
    console.log(data);
  }
  constructor() { }


}
