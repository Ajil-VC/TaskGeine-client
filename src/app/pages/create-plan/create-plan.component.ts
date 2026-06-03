import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plan } from '../../core/plan';

@Component({
  selector: 'app-create-plan',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-plan.component.html',
  styleUrl: './create-plan.component.css',
})
export class CreatePlanComponent {
  query = '';
  plan: Plan | null = null;
  isCreating = false;

  createPlan(): void {
    const trimmed = this.query.trim();
    if (!trimmed || this.isCreating) {
      return;
    }

    // TODO: call backend / Gemini API and assign response to this.plan
    this.isCreating = true;
    this.plan = null;

    // Placeholder so the layout can be reviewed until the API is wired
    setTimeout(() => {
      this.plan = this.buildSamplePlan(trimmed);
      this.isCreating = false;
    }, 400);
  }

  private buildSamplePlan(planTitle: string): Plan {
    return {
      planTitle,
      totalDays: 2,
      estimatedHoursPerDay: 2,
      days: [
        {
          day: 1,
          date: new Date().toISOString().slice(0, 10),
          totalEstimatedTime: 120,
          tasks: [
            {
              title: 'Clarify scope and success criteria',
              estimatedTime: 30,
              type: 'research',
              priority: 'high',
              isCompleted: false,
            },
            {
              title: 'Break work into timed chunks',
              estimatedTime: 45,
              type: 'planning',
              priority: 'medium',
              isCompleted: false,
            },
          ],
        },
        {
          day: 2,
          date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
          totalEstimatedTime: 90,
          tasks: [
            {
              title: 'Execute first chunk',
              estimatedTime: 60,
              type: 'execution',
              priority: 'high',
              isCompleted: false,
            },
            {
              title: 'Review and adjust plan',
              estimatedTime: 30,
              type: 'review',
              priority: 'low',
              isCompleted: false,
            },
          ],
        },
      ],
    };
  }
}
