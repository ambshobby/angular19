import { Routes } from '@angular/router';
import { ArrayvalueComponent } from './componentspractice/arrayvalue/arrayvalue.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
    { 
        path: '',
        title: 'App Home Page',
        component:DemoComponent,
        
    },
    {
        path: 'arrayval',
        title: 'App Home Page',
        component:ArrayvalueComponent,
    }
];
