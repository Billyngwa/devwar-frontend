import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink,SidenavComponent,NavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
