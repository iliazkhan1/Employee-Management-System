import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditDeleteEmployeeComponent } from './edit-delete-employee/edit-delete-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path:'employee/:id', component: EmployeeDetailsComponent},
    {path:'edit-delete', component: EditDeleteEmployeeComponent},
    {path: 'add', component: AddEmployeeComponent}
];

