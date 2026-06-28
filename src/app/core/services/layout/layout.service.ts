import { Injectable, signal } from '@angular/core';
import { PageInfo, PAGES } from '../../models/page_signal';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  pageSignal = signal<PageInfo>({ title: PAGES.Dashboard.title, subtitle: PAGES.Dashboard.subtitle });

}
