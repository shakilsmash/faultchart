import { CommonService } from './common.service';
import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators, FormsModule} from '@angular/forms';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newService : CommonService) { }
  Repdate;
  valbutton="Save";

  title = 'hello-world';

  ngOnInit() {
    this.newService.getFault().subscribe(data => this.Repdate = data)
  }

  onSave = function(fault, isValid: boolean) {
    fault.mode = this.valbutton;
    this.newService.saveFault(fault).subscribe(data => { alert(data.data);
        this.ngOnInit();
    },
    error => this.errorMessage = error)
  }
  edit = function(kk) {
    this.id = kk._id;
    this.fromTime = kk.fromTime;
    this.toTime = kk.toTime;
    this.domain = kk.domain;
    this.subDomain = kk.subDomain;
    this.causeDescriptor = kk.causeDescriptor;
    this.correctDescriptor = kk.correctDescriptor;
    this.valbutton = "Update";
  }

  delete = function(id) {
    this.newService.deleteUser(id).subscribe(data => { alert(data.data);
      this.ngOnInit();
    },
    error => this.errorMessage = error)
  }
}
