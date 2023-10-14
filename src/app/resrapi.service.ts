import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResrapiService {

  apiurl="https://newsapi.org/v2/top-headlines?country=us&apiKey="
  apikey="1834798b08a04cc3a2105473d9210525"


  constructor(
    public httpclient: HttpClient,
    public router: Router
  ){}

  getNewsData(){
    let url= this.apiurl+ this.apikey;
    return this.httpclient.get(url);
  }
}

// country:string