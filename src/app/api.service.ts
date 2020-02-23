import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class ApiService {

  API_KEY ='1550b92737a147d38695a1e02fdb5697';
  URL ='https://newsapi.org/v2/top-headlines';
  constructor(private httpclient:HttpClient) { 

  }

  public getnews(){
    return this.httpclient.get(this.URL+'?sources=techcrunch&apiKey='+this.API_KEY);

  }
}
