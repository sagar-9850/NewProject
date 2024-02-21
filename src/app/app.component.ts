import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  // users=['sagar', 'bhaskar', 'sam','peter'];
  // userDetails= [
  //   {name: 'sagar', age: 21, Email:'sagar@123', number: 12345566789},
  //   {name: 'Akash', age: 23, Email:'akr@123', number: 12345566789},
  //   {name: 'vilas', age: 55, Email:'vkar@123', number: 12345566789},
  //   {name: 'Thorat', age: 23, Email:'Thar@123', number: 12345566789},
  // ];
  // color= "green";
  // show = false;
  // DisaplayVal= ''
  // getValue(val: string)
  // {
  //   console.warn(val);
  //   this.DisaplayVal = val;
  // }

  userData:any={};
  getData(data:NgForm)
  {
    console.warn(data)
    this.userData=data
  }

}
