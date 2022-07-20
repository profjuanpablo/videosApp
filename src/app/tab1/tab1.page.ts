import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}

  async exibirAlertFavorito() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Alerta',
     // subHeader: 'Subtitle',
      message: 'Deseja favovitar este Filme.',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel',
          cssClass:'secondary',
          handler: (blah)=>{
            console.log('Confirma Cancel:bla')
          }
        },
        {
          text: 'Sim, FAvoritar',
          handler:() => {
            console.log('Confirm Ok')
          }

        }
      ],

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
