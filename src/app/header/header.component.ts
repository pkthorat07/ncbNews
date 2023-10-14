import { Component } from '@angular/core';
import { ResrapiService } from '../resrapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  country:string="in"


  constructor(
    public restApi: ResrapiService,
    public router: Router,
  ){

  }
}
