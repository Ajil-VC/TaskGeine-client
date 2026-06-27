import { Component, EventEmitter, Output } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<void>();
}
