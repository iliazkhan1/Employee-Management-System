import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteEmployeeComponent } from './edit-delete-employee.component';

describe('EditDeleteEmployeeComponent', () => {
  let component: EditDeleteEmployeeComponent;
  let fixture: ComponentFixture<EditDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeleteEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
