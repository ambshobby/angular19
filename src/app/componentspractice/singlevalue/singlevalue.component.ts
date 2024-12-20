import { Component } from '@angular/core';
import { ArrayvalueComponent } from "../arrayvalue/arrayvalue.component";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-singlevalue',
  imports: [ArrayvalueComponent,UpperCasePipe],
  templateUrl: './singlevalue.component.html',
  styleUrl: './singlevalue.component.scss'
})
export class SinglevalueComponent 
{
  a:number=10;
  name:string="atul";
}
