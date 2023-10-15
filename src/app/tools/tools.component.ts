import { Component } from '@angular/core';
import { ResrapiService } from '../resrapi.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  selectedOption:any

  countrys: any[]=[
    {id:'in', name:'IND'},
    {id:'us', name:'USA'},
    {id:'ua', name:'UAE'}
  ];
  selected:string='in';




  constructor(
    public restApiData: ResrapiService
  ){

  }

  onSelect(event:any){
    console.log(event.target.value)
    let dropdownValue=event.target.value;
    this.restApiData.getNewsByDropdownValue(dropdownValue).subscribe(res=>{
      this.restApiData.news.next(res)
    })

  }

  ngOnInit(){
    // this.getApiData
    console.log("id",this.selected);

  }

  
  // getApiData(id:string){
  //   this.restApiData.getNewsData().subscribe((res:any)=>{
  //     this.countrys=res
  //   console.log(id);
  //   console.log(this.selected)
  //   })
  // }

 

}
