import { IFilme } from './../models/IFilmes.models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos App';
  listaVideos: IFilme[] = [
    {
      nome: 'Minions 2: A Origem de Gru',
      lancamento: '30/06/2022',
      duracao: '1h 27m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg',
      generos:  ['Infantil', 'Família'],
      pagina: '/minions2'

    },
    {
      nome: 'thor: Amor e trovão',
      lancamento: '08/07/2022',
      duracao: '1h 59m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6OEBp0Gqv6DsOgi8diPUslT2kbA.jpg',
      generos:  ['Ação', 'Aventura', 'Fantasia'],
      pagina: '/thor-amor-e-trovao'

    },
    {
      nome: 'Lightyear (2022)',
      lancamento: '16/06/2022',
      duracao: '1h 47',
      classificacao: 72,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/js8FIFJ2xyK7pcUQ0pvuX3mJldC.jpg',
      generos:  ['Animação', 'Ficção', 'Aventura', 'Ação'],
      pagina: '/lightyear'

    }
  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController
    ) {}

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
            console.log('Confirma Cancel:bla');
          }
        },
        {
          text: 'Sim, FAvoritar',
          handler:() => {
            //console.log('Confirm Ok')
            this.apresentarToast();
          }

        }
      ],

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme Favoritado!!!!!',
      duration: 2000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }


}
