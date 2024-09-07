import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {}

  onLogout() {
    localStorage.clear();

    this.router.navigate(['/']);
  }
}
