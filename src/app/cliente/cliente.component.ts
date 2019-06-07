import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {

  constructor(public navCtrl: NavController, public router: Router) { }

  public cliente: any = {};

  ngOnInit() {
    
  }

  voltarRouter() {
    this.router.navigate(['/home'])
  }

  voltarNavigate() {
    this.navCtrl.navigateBack('/home');
  }
}
