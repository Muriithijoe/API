import { Component, OnInit } from '@angular/core';
import {User} from '../user-class/user'
import {Http, Response} from '@angular/http'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  link= 'https://api.github.com/users/'
  access_token='?access_token=230ccfe64022875f67957b0581f05f04ca9bb2df'
  users=[];

  constructor(private http:Http) { }
  performSearch(search){
    let fullLink = this.link + search.value + this.access_token;

    this.http.get(fullLink).subscribe((res:Response)=>{
      this.users= res.json();
      console.log(this.users)
    })

  }

  ngOnInit() {
  }

}
