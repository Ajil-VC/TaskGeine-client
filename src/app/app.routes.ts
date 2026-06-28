import { Routes } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CreatePlanComponent } from './features/create-plan/create-plan.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'create-plan', component: CreatePlanComponent },
        ]
    }
];
