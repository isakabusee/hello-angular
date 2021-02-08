import { Component, OnInit } from '@angular/core';
// import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  template: `
  <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
  </div> 
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> <br/>
  {{ course.title | uppercase | lowercase }} <br/>
  {{ course.students | number}} <br/>
  {{ course.rating | number:'2.1-1'}} <br/>
  {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
  {{ course.releaseDate | date:'shortDate' }} <br/>
  {{ text | summary:10 }}
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
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting thing. I guess I can write anything I want here. I like this pipe stuff`
}
