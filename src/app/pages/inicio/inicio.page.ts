import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    ) { }

  ngOnInit() {
  }
  mostrarMenu(){

    this.menuCtrl.open('first');

    }

}
