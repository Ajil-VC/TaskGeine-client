import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LayoutService } from '../../core/services/layout/layout.service';
import { PageInfo, PageKey, PAGES } from '../../core/models/page_signal';

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

  layoutService = inject(LayoutService);

  menuItems: { route: string, page: PageInfo }[] = [
    {
      route: '/dashboard',
      page: PAGES.Dashboard,
    },
    {
      route: '/create-plan',
      page: PAGES.CreatePlan,
    },
    {
      route: '/my-plans',
      page: PAGES.MyPlans
    },
    {
      route: '/today',
      page: PAGES.Today
    },
    {
      route: '/completed',
      page: PAGES.Completed
    },
    {
      route: '/settings',
      page: PAGES.Settings
    }
  ];

  closeSidebarAndHandlePageTitle() {

    this.closeSidebar.emit();
  }
}
