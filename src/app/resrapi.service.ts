import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResrapiService {

  news=new Subject<any>()

  apiurl="https://newsapi.org/v2/top-headlines?country=us&apiKey="
  apikey="ec39229c4d1c4393b1dc0aab9c2786ed"

  url="https://newsapi.org/v2/top-headlines?country="
  key="&apiKey=ec39229c4d1c4393b1dc0aab9c2786ed"


  constructor(
    public httpclient: HttpClient,
    public router: Router
  ){}

  getNewsData(){
    let url= this.apiurl+ this.apikey;
    return this.httpclient.get(url);
  }

  getNewsByDropdownValue(country:any){
    let url=this.url + country + this.key;
    return this.httpclient.get(url);
  }
}

