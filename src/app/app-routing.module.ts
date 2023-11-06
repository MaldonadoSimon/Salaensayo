import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectioRoomComponent} from './sectio-room/sectio-room.component'
import { HeaderComponent } from './header/header.component'
import { SectionHomeComponent } from './section-home/section-home.component'
import { NavComponent } from './nav/nav.component'
import { FooterComponent } from './footer/footer.component'
import { SismosComponent } from './sismos/sismos.component'
import { BitcoinComponent } from './bitcoin/bitcoin.component'

const routes: Routes = [

  {
    path:'room',
    component:SectioRoomComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'nav',
    component:NavComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'',
    component:SectionHomeComponent
  },
  {
    path:'sismos',
    component:SismosComponent
  },
  {
    path:'bitcoin',
    component:BitcoinComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
