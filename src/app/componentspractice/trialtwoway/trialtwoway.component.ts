import { Component, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-trialtwoway',
  imports: [],
  templateUrl: './trialtwoway.component.html',
  styleUrl: './trialtwoway.component.scss'
})
export class TrialtwowayComponent 
{
  @Output() fromtrailop=new EventEmitter<any>();

  calltrail(val:any)
  {
    this.fromtrailop.emit(val)
  }

}
