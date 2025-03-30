//  FOR COURSES ARRAY
import { courses } from "../scripts/course.js";
//console.log(courses);

// GRAB A  REFERENCE TO THE DIVISION WHERE WE WANT TO DISPLAY
// THE ITEMS
const courseDetails = document.querySelector("#show-details");

// GET A REFERENCE TO THE HTML DIALOG ITEM
const mydialog = document.querySelector("#course-details");
const mytitle = document.querySelector("#course-details h2");
const myinfo = document.querySelector("#course-details p");
const myclose = document.querySelector("#course-details button");
myclose.addEventListener('click', () => mydialog.close());

// LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(coursesArray) {
    //console.log(coursesArray);
    coursesArray.forEach(course => {
        console.log(course);
        const coursebutton = document.createElement("button");
        coursebutton.innerHTML = `${course.subject} ${course.number}`
         // ADD EVENT LISTENER TO THE COURSEBUTTONS
        coursebutton.addEventListener('click', () => showDetails(course));

        // ADD STYLING TO THE COURSES
        coursebutton.classList.add("uncompletedCourse");
        if (course.completed) {
            coursebutton.classList.add("completedCourse");
        }

        courseDetails.appendChild(coursebutton);
        
    });

} // End function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(courses);

// POPULATE THE DIALOG WITH INFORMATION WHEN BUTTON IS CLICK
function showDetails(course) {
    mytitle.innerHTML = `${course.subject} ${course.number}`;
    myinfo.textContent = course.description;
    mydialog.showModal();
}



