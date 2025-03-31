import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees'; // JSON Server API

  constructor(private http: HttpClient) {}

  // Fetch all employees
  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch a single employee by ID
  getEmployeeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Add a new employee
  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  // Update existing employee details (String ID handling)
  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  // Delete an employee
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
