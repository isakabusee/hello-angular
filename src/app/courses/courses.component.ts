import { Component, OnInit } from '@angular/core';
// import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  template: `
  <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
  </div>
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
  
  //this section is called the DOM
})
export class CoursesComponent {
  onDivClicked() {
    console.log("Div was clicked")
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("This button was clicked", $event);
  }
  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }
}
