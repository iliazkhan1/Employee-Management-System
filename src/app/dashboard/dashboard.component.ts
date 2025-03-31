import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  employees: any[] = []; // Store the employee data as an array

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    console.log("Dashboard Component Loaded!"); // ✅ Debugging line
    this.employeeService.getEmployees().subscribe((data) => {
      console.log("Employee data:", data); // ✅ Check API response
      this.employees = data;
    });
  }

  // Function to navigate to the employee details page
  viewDetails(id: string) {
    this.router.navigate(['/employee', id]); // Redirect to employee details component
  }
  
}