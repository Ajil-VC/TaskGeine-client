import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
interface MenuItem {
  id: string,
  icon: string,
  label: string,
  route: string,
  active: boolean,
  required?: Permissions[]
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isOpen = false; // mobile
  @Output() closeSidebar = new EventEmitter<void>();
}
