"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataCourses_js_1 = require("./dataCourses.js");
var dataStudent_js_1 = require("./dataStudent.js");
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var studentTbody = document.getElementById('student');
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses_js_1.dataCourses);
renderStudentInTable(dataStudent_js_1.dataStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses_js_1.dataCourses);
function renderCoursesInTable(courses) {
    courses.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + c.name + "</td>\n                           <td>" + c.professor + "</td>\n                           <td>" + c.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInTable(student) {
    student.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + c.code + "</td>\n                           <td>" + c.id + "</td>\n                           <td>" + c.age + "</td>\n                           <td>" + c.adress + "</td>\n                           <td>" + c.phone + "</td>";
        studentTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses_js_1.dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses_js_1.dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
