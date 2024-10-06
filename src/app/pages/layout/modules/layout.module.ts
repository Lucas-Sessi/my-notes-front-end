import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { LayoutComponent } from '../layout.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderComponent,
  ]
})
export class LayoutModule { }
