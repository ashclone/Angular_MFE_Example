import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';

console.warn('Admin Module Loaded ');

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
