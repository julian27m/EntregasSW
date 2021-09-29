import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { student } from './student.js';

import { dataStudent } from './dataStudent.js';

const coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCred: HTMLElement = document.getElementById("button-filterByCred")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchBoxCred: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-cred")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;
const studentTbody: HTMLElement = document.getElementById('student')!;

btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCred.onclick = () => applyFilterByCredits();

renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  courses.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 
function renderStudentInTable(student: student[]): void {
  student.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.code}</td>
                           <td>${c.id}</td>
                           <td>${c.age}</td>
                           <td>${c.adress}</td>
                           <td>${c.phone}</td>`;
    studentTbody.appendChild(trElement);
  });
}
 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function applyFilterByCredits() { 
  let text = inputSearchBoxCred.value.split(",");
  let minCred: number = + text;
  let maxCred: number = + text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(minCred, maxCred, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByCredits(minCred: number, maxCred: number, courses: Course[]) {
  return courses.filter( c => 
    c.credits<maxCred && c.credits>minCred);
}

function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}


  
  

