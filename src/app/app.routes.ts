import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './pages/appointment-manage/appointment-manage.component';
import { PatientManageComponent } from './pages/patient-manage/patient-manage.component';

export const routes: Routes = [
    {
        path:"appointment",
        component:AppointmentManageComponent
    },
    {
        path:"patient",
        component:PatientManageComponent
    }
];
