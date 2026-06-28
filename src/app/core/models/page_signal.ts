export const PAGES = {
    Dashboard: {
        title: 'Dashboard',
        subtitle: 'Your plans, today’s focus, and what’s coming next.',
    },
    CreatePlan: {
        title: 'Create plan',
        subtitle: 'Describe your task and TaskGenie will break it into timed steps.',
    },
    MyPlans: {
        title: 'My Plans',
        subtitle: ''

    },
    Today: {
        title: 'Today',
        subtitle: ''
    },
    Completed: {
        title: 'Completed',
        subtitle: ''
    },
    Settings: {
        title: 'Settings',
        subtitle: ''
    }
} as const;


export type PageKey = keyof typeof PAGES;
export type PageInfo = (typeof PAGES)[PageKey];