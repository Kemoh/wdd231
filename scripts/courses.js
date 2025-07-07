// ------- Course Array-----------------//
const courses = [
    {
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
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
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
        completed: false
    },
    {
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

// Select the DOM Elements for Output
const all = document.getElementById("all");
const wdd = document.getElementById("wdd");
const cse = document.getElementById("cse");

// Add event listenners to the buttons
all.addEventListener("click", () => filteredCourses("ALL"));
wdd.addEventListener("click", () => filteredCourses("WDD"));
cse.addEventListener("click", () => filteredCourses("CSE"));

// Call the createCourseCard function on page laod
createCourseCard(courses);

// Create the courseCard function
function createCourseCard(filteredCourses) {
    // Select the DOM element for output
    const courseList = document.querySelector("#display-courses");

    // clear previous content
    courseList.innerHTML = " "; 

    // Loop through the courses array and create elements
    filteredCourses.forEach(course => {
        let card = document.createElement("div");
        let color = document.createElement("button");
        let subject = document.createElement("h3");
        let number = document.createElement("h3"); 

    // Add a class for uncompleted courses
    color.classList.add("uncompleted");

    // Add a class for completed courses
    if(course.completed) {
        color.classList.add("completed");
    }

    // Populate the elements that have been created
    subject.textContent = course.subject;
    number.textContent = course.number;
    color.innerHTML = `<span class="course-content"> ${course.subject} ${course.number} </span>`;

    // Append populated elements to card:
    card.append(color);

    // Load course card to DOM:
    courseList.appendChild(card);
    });
};

// Function to filter courses by category
function filteredCourses(category) {
    let filteredList = courses;
    if(category !== "ALL") {
        filteredList = courses.filter(course => course.subject === category);
    }

    // Insert Courses to DOM
    createCourseCard(filteredList);

    // Total number of courses when filtered button is clicked:

    // Select the DOM element for Output
    const courseCount = document.getElementById("course-count");

    // Display courseCount
    courseCount.innerHTML = `<span class="count-courses">The total number of courses listed is: ${filteredList.length}</span>`;

    // Calculate Course Credits
    
    // Select the DOM element for Output
    const creditCount = document.getElementById("credit-count");

    // Use Reduce function
    const totalCredits = filteredList.reduce((sum, course) => sum + course.credits, 0);

    // Display Credit Count
    creditCount.innerHTML = `<span class="count-credit">Total credits is: ${totalCredits}</span>`;
}

// Default Course Count
filteredCourses("ALL");



