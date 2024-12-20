import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SinglevalueComponent } from "./componentspractice/singlevalue/singlevalue.component";
import { ArrayvalueComponent } from "./componentspractice/arrayvalue/arrayvalue.component";
import { TwowayComponent } from "./componentspractice/twoway/twoway.component";
import { TrialtwowayComponent } from "./componentspractice/trialtwoway/trialtwoway.component";
import { RegistercompoComponent } from "./registercompo/registercompo.component";
import { MasternavComponent } from "./masternav/masternav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, SinglevalueComponent, ArrayvalueComponent, TwowayComponent, TrialtwowayComponent, RegistercompoComponent, MasternavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoformumbai04';
  tillnow:any=[];
  trialtillnow:any=[];
  personarraytemp:any=[]

  calltsinparent(val:any)
  {
    this.tillnow.push(val);
  }

  rootmethod(val:any)
  {
    this.trialtillnow.push(val);
  }

  regform(per:any)
  {
    this.personarraytemp.push(per);
  }
}
