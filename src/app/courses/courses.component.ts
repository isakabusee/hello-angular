import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `
  //this section is called the DOM
})
export class CoursesComponent {
  isActive = true;
  // title = "List of courses";
  // imageUrl = ""
  //this section is called as the component
}
