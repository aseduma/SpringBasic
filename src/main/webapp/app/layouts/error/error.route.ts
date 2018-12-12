import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'SpringBasic'
        }
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'SpringBasic',
            error403: true
        }
    }
];
