import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      achievements: [''],
      email: ['', [Validators.required, Validators.email]],
      phno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      imageUrl: ['', Validators.required]
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
