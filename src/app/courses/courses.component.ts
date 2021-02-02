import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  template: `
  <h2>{{ title }}<h2>
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>`
  // templateUrl: './courses.component.html',
  // styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;

  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}