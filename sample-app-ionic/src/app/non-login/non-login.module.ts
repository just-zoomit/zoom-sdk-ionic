import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NonLoginPage } from './non-login.page';

import { NonLoginPageRoutingModule } from './non-login-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NonLoginPageRoutingModule
  ],
  declarations: [NonLoginPage]
})
export class NonLoginPageModule {}
