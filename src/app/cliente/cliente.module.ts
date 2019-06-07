import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '', 
        redirectTo: 'cliente', 
        pathMatch: 'full'
    },
    {
        path: 'cliente', 
        component: ClienteComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        IonicModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ClienteComponent
    ]
})

export class ClienteModule { }