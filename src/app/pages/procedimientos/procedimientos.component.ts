// Angular.
import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';



@Component({
  imports: [BannerComponent],
  standalone:true,
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.scss']
})
export class ProcedimientosComponent { }