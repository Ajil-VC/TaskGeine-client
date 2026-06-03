import { Routes } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';

export const routes: Routes = [

    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'create-plan', component: CreatePlanComponent },
        ]
    }
];
