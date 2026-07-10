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
        completed: true
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


let myClases = courses;
let holdcredit = 0;
let holdcount = 0;

const abutton = document.getElementById("all");
const abutton2 = document.getElementById("cse");
const abutton3 = document.getElementById("wdd");


//document.addEventListener("DOMContentLoaded", () => {
    //const abutton = document.getElementById("all");
    

    abutton.addEventListener("click", () => {
        myClases = myClases.filter(classes => classes.certificate === "Web and Computer Programming");
       
        createClassCard();
       
});


    abutton2.addEventListener("click", () => {
        myClases = myClases.filter(classes => classes.subject === "CSE");
        createClassCard();
});


    abutton3.addEventListener("click", () => {
      myClases = myClases.filter(classes => classes.subject === "WDD");
      createClassCard();
});
















//});
/*
document.addEventListener("DOMContentLoaded", () => {
    //const abutton = document.getElementById("cse");
   

    abutton.addEventListener("click", () => {
        myClases = myClases.filter(classes => classes.subject === "CSE");
        createClassCard();
});
});

document.addEventListener("DOMContentLoaded", () => {
    const abutton = document.getElementById("wdd");
    
    abutton.addEventListener("click", () => {
      myClases = myClases.filter(classes => classes.subject === "WDD");
      createClassCard();
});
});

*/

function findCredits() {
       
    myClases = myClases.filter();
    createClassCard();
}
function addCredits() {
   
    myClases.forEach(classes => {
    if (classes.completed == "true") {
        holdcredit = holdcredit + classes.credits;
    }
})
}

function createClassCard() {
    
    document.getElementById("alist").innerHTML = "";
    //document.getElementsByClassName("cardlist").clear();
    myClases.forEach(classes => {
        let classcard = document.createElement("section");
        let cardName = document.createElement("p"); 
        cardName.textContent = classes.subject + classes.number;
        classcard.appendChild(cardName);
       
        document.querySelector(".cardlist").appendChild(classcard);

        holdcount = holdcount + 1; //test that needs to be deleted
    }

    )
};





 /* classButton.querySelector(".cardlist").appendChild("testone"); */
