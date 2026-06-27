import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TaskStatus = 'todo' | 'in_progress' | 'done';

interface TaskItem {
  id: string;
  title: string;
  etaMinutes: number;
  status: TaskStatus;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  readonly todayTasks: TaskItem[] = [
    { id: 't1', title: 'Break “Landing page” into chunks', etaMinutes: 35, status: 'in_progress' },
    { id: 't2', title: 'Implement sidebar routes', etaMinutes: 20, status: 'todo' },
    { id: 't3', title: 'Review plan timing estimates', etaMinutes: 15, status: 'todo' },
  ];

  readonly upcomingTasks: TaskItem[] = [
    { id: 'u1', title: 'Add “Completed” page & list', etaMinutes: 25, status: 'todo' },
    { id: 'u2', title: 'Connect Gemini plan generator', etaMinutes: 45, status: 'todo' },
    { id: 'u3', title: 'Polish dashboard cards', etaMinutes: 30, status: 'todo' },
  ];

  get doneCount(): number {
    const all = [...this.todayTasks, ...this.upcomingTasks];
    return all.filter((t) => t.status === 'done').length;
  }

  get totalCount(): number {
    return this.todayTasks.length + this.upcomingTasks.length;
  }

  get progressPercent(): number {
    const total = this.totalCount;
    if (total === 0) return 0;
    return Math.round((this.doneCount / total) * 100);
  }
}
