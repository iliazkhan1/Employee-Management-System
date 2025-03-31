import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-delete-employee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './edit-delete-employee.component.html',
  styleUrl: './edit-delete-employee.component.css'
})
export class EditDeleteEmployeeComponent {
  employees: any[] = [];
  selectedEmployee: any = null;

  @ViewChild('editForm') editForm!: ElementRef; // Reference to the edit form

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  editEmployee(employee: any) {
    this.selectedEmployee = { ...employee }; 
    setTimeout(() => {
      this.scrollToEditForm(); // Scroll to form after employee is selected
    }, 100);
  }

  scrollToEditForm() {
    if (this.editForm) {
      this.editForm.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  cancelEdit() {
    this.selectedEmployee = null;
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.selectedEmployee.id, this.selectedEmployee).subscribe(() => {
      this.loadEmployees();
      this.selectedEmployee = null;
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== id);
    });
  }

  viewDetails(id: string) {
    this.router.navigate(['/employee', id]);
  }
}

