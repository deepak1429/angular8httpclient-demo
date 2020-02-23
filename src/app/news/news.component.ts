import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articals;
  constructor(private apiservice :ApiService) { }

  ngOnInit() {
    this.apiservice.getnews().subscribe(data=>{
      this.articals=data['articles'];
      console.log(data);
    })
  }

}
