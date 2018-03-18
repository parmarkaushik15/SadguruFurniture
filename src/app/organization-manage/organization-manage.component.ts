import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-manage',
  templateUrl: './organization-manage.component.html'
})
export class OrganizationManageComponent implements OnInit {

  constructor() { }

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

}
