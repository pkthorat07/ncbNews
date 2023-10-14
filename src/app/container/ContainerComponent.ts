import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResrapiService } from '../resrapi.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {

  country: string = 'ind';
  newsData: any;

  longText = "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.";
  ncbNewsData: any;
  newNewsData: any;

  constructor(
    public router: Router,
    public restApiServices: ResrapiService
  ) { }

  ngOnInit() {
    this.getNewsData();
    
  }

  getNewsData() {
    this.restApiServices.getNewsData().subscribe(res => {
      this.ncbNewsData = res;
      console.log("ncbNewsData", this.ncbNewsData.articles);

    });

   
  }
  


}
