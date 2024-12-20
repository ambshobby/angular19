import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-registercompo',
  imports: [],
  templateUrl: './registercompo.component.html',
  styleUrl: './registercompo.component.scss'
})
export class RegistercompoComponent {
@Output() regdata=new EventEmitter<any>();
person: any =new person();
personarray:any=[];
regup(fn:any,ln:any)
{
  this.person.fname=fn;
  this.person.lname=ln;
  this.personarray.push(person);
  console.log(this.personarray);
  this.regdata.emit(this.personarray);
}

}
class person{
  fname:any
  lname:any
  constructor() {
    
  }
}