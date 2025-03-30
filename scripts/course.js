export const courses = [
    {
        order : 1,
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        order: 2,
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        order: 3,
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        order: 3,
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        order: 4,
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        order: 5,
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


const allButton = document.getElementById("all");
const wddButton = document.getElementById("wdd");
const cseButton = document.getElementById("cse");

// Event listeners for filtering courses
allButton.addEventListener("click", () => filteredCourses("All"));
wddButton.addEventListener("click", () => filteredCourses("WDD"));
cseButton.addEventListener("click", () => filteredCourses("CSE"));

// Call createCourseCard when the page loads
createCourseCard(courses);

// Create the course card function that loops through the courses array:
function createCourseCard(filteredCourses) {
    const courseContainer = document.querySelector(".courseCards");
    courseContainer.innerHTML = ""; // Clear previous content

    filteredCourses.forEach(course => {
        let card = document.createElement("summary");
        let courseName = document.createElement("div"); 
        let subject = document.createElement("h3");
        let number = document.createElement("p");

        // Add a class for styling
        courseName.classList.add('uncompletedCourse');

        // Add a class for completed courses: 
        if (course.completed) {
            courseName.classList.add('completedCourse'); 
        }

        // Populate the elements that have been created:
        subject.textContent = course.subject;
        number.textContent = course.number;
        courseName.innerHTML = `<span class="label">${course.subject}</span> ${course.number}`;

        // Append all populated elements to our card
        card.append(courseName);

        // Load the course card into the HTML
        courseContainer.appendChild(card);
    });
}

// Function to filter courses by category
function filteredCourses(category) {
    let filtered = courses;

    if (category !== "All") {
        filtered = courses.filter(course => course.subject === category);
    }

    createCourseCard(filtered);
}

// Function to add styling for completed courses
function displayColors(courseList = courses) {
    courseList.forEach(course => {
        let courseElement = document.createElement("div");
        courseElement.classList.add("course"); // Add a class for styling

        if (course.completed) {
            courseElement.classList.add("completed"); // Add a class for completed courses
        }
    });
}
















// const allCoursesButton = document.getElementById("allCourses");
// const wddCoursesButton = document.getElementById("wddCourses");
// const cseCoursesButton = document.getElementById("cseCourses");

// //Call the courseCards when the html page loads:
// createCourseCard(courses);

// // Create the course card function that loops through the courses array:
// function createCourseCard(filteredCourses) {
//    document.querySelector(".courseCards") == " ";
//    // Loop through the cards array using the forEach method:
//    filteredCourses.forEach(course => {
//      let card = document.createElement("summary");
//      let courseName = document.createElement("div"); 
//      let subject = document.createElement("h3");
//      let number = document.createElement("p");
  
//       // Add a class for styling
//       courseName.classList.add('uncompletedCourse');
//       // Add a class for completed courses: 
//        if (course.completed) {
//         courseName.classList.add('completedCourse'); 
//         }

//      // Populate the elements that has been created:
//      subject.textContent = course.subject;
//      number.textContent = course.number;
//      courseName.innerHTML = `<span class = "label">${course.subject}</span> ${course.number}`;
  
//     // Is time to append all the populated elements to our card, which is the section element:
//     card.append(courseName);

//     // Is time to load our course card to the html:
//     document.querySelector(".courseCards").appendChild(card);
    
//    });
//  }

// function displayColors(courseList = courses) {
//   courseList.forEach(course => {
//   courseElement.classList.add('course'); // Add a class for styling
//       if (course.completed) {
//       courseElement.classList.add('completed'); // Add a class for completed courses
//  }

// });

// }





