import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module')
    .then( m => m.MortalKombatPageModule)
  },
  {
    path: 'liga-justica',
    loadChildren: () => import('./filmes/liga-justica/liga-justica.module')
    .then( m => m.LigaJusticaPageModule)
  },
  {
    path: 'minions2',
    loadChildren: () => import('./filmes/minions2/minions2.module').then( m => m.Minions2PageModule)
  },
  {
    path: 'thor-amor-e-trovao',
    loadChildren: () => import('./filmes/thor-amor-e-trovao/thor-amor-e-trovao.module').then( m => m.ThorAmorETrovaoPageModule)
  },
  {
    path: 'lightyear',
    loadChildren: () => import('./filmes/lightyear/lightyear.module').then( m => m.LightyearPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
