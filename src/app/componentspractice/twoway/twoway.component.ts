import { Component, Output,EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-twoway',
  imports: [],
  templateUrl: './twoway.component.html',
  styleUrl: './twoway.component.scss'
})
export class TwowayComponent 
{
  @Output() datafrommethod=new EventEmitter<any>();

  callts(val:any)
  {
    console.log(val);
    
    this.datafrommethod.emit(val);
  }
}
