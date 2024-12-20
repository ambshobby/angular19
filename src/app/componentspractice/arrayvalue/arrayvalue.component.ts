import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayvalue',
  imports: [],
  templateUrl: './arrayvalue.component.html',
  styleUrl: './arrayvalue.component.scss'
})
export class ArrayvalueComponent 
{
  intarray:any=[1,2,3,33,44,668];
  sumarray:any=[];
  evens:any=[];

  sum()
  {
    
    for(let i=0; i<this.intarray.length;i++)
    {
      this.sumarray[i]=this.intarray[i]+20;
      console.log(this.sumarray)
    }
  }
  even()
  {
    for(let i=2;i<30;i++)
    {
      if(i%2==0)
      {
        this.evens[i]=i;
      }
    }
  }
}
