//Write some code to print a student component to the DOM

// function printStudentToDOM (studentName, studentBio){
//     document.querySelector(".student-container").innerHTML += `      <article>
//             <h3>${studentName}</h3>
//             <p>${studentBio}</p>
//             <p>Langauges: HTML, CSS, JavaScript</p>
//             </article>`
// }

// printStudentToDOM("Lindsey", "built awesome Pumba website");
// printStudentToDOM("Austin", "His mom is really cool");
// printStudentToDOM("Mike", "hooray for orby");
// printStudentToDOM("Ashon", "learned a cool HTML shortcut");

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// function printStudentToDOM (studentName, subject, info, score){
//     document.querySelector(".student-container").innerHTML += `      <article>
//             <h3>${studentName}</h3>
//             <p>${subject}</p>
//             <p>${info}</p>
//             <p>${score}</p>
//             <p>Langauges: HTML, CSS, JavaScript</p>
//             </article>`
// }

// function printStudentToDOM (studentName, subject, info, score){
//     return
//     `      <article>
//             <h3>${studentName}</h3>
//             <p>${subject}</p>
//             <p>${info}</p>
//             <p>${score}</p>
//             <p>Langauges: HTML, CSS, JavaScript</p>
//             </article>`;
// }

// for (let i = 0; i < students.length; i++){
//     printStudentToDOM(students[i].name, students[i].subject, students[i].info, students[i].score)
// }

// const studentContainer = document.querySelector("#container")

// for (let i = 0; i < students.length; i++) {
//     const student = students[i]
//     studentContainer.innerHTML += createStudentComponent(
//         student.name,
//         student.subject,
//         student.info
//     )
// }

// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = `
//         <div class="student">
//             <h1 class="xx-large passing">${students[i].name}</h1>
//             <section class="bordered dashed section--padded">${students[i].subject}</section>
//             <aside class="pushRight">${students[i].info}</aside>
//         </div>`
//     } else {
//         studentComponent = 
//         `<div class="student">
//         <h1 class="xx-large failing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     }
//     document.querySelector("#container").innerHTML += studentComponent;
// }

// for (student of students) {
//     let studentComponent = ""
//     if (student.score >= 60) {
//         studentComponent = `
//         <div class="student">
//             <h1 class="xx-large passing">${student.name}</h1>
//             <section class="bordered dashed section--padded">${student.subject}</section>
//             <aside class="pushRight">${student.info}</aside>
//         </div>`
//     } else {
//         studentComponent = 
//         `<div class="student">
//         <h1 class="xx-large failing">${student.name}</h1>
//         <section class="bordered dashed section--padded">${student.subject}</section>
//         <aside class="pushRight">${student.info}</aside>
//     </div>`
//     }
//     document.querySelector("#container").innerHTML += studentComponent;
// }

// const createStudentComponent = (name, subject, info, score) => {
//     if (score >= 60) {
//         return
//         `<div class="student">
//             <h1 class="xx-large passing">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>`
//     } else {
//         return 
//         `<div class="student">
//             <h1 class="xx-large failing">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>`
//         }
// }

// // Practice 1
// const createStudentComponent = (name, subject, info, score) => {
//     if (score >= 60) {
//         return `
//         <div class="student">
//             <h1 class="xx-large passing">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>`
//     } else {
//         return `
//         <div class="student">
//             <h1 class="xx-large failing">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>`
//         }
// }

// const createStudentComponent = (name, subject, info, headingClassName) => {
//  return `
//         <div class="student">
//             <h1 class="xx-large ${headingClassName}">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>`
// }

// //Practice 1
// for (student of students){
//     let studentComponent = ""

//     if (student.score >= 60){
//         studentComponent = createStudentComponent(student.name, student.subject, student.info, "passing")
//     }
//     else{
//         studentComponent = createStudentComponent(student.name, student.subject, student.info, "failing")
//     }
    
//     document.querySelector("#container").innerHTML += studentComponent
// }


// Practice 2: One Object to Rule Them ALL
// const createStudentComponent = (studentObject) => {
//     if (studentObject.score >= 60) {
//         return `
//         <div class="student">
//             <h1 class="xx-large passing">${studentObject.name}</h1>
//             <section class="bordered dashed section--padded">${studentObject.subject}</section>
//             <aside class="pushRight">${studentObject.info}</aside>
//         </div>`
//     } else {
//         return `
//         <div class="student">
//             <h1 class="xx-large failing">${studentObject.name}</h1>
//             <section class="bordered dashed section--padded">${studentObject.subject}</section>
//             <aside class="pushRight">${studentObject.info}</aside>
//         </div>`
//         }
// }

// const createStudentComponent = (studentObject, headingClassName) => {
//     return `
//     <div class="student">
//         <h1 class="xx-large ${headingClassName}">${studentObject.name}</h1>
//         <section class="bordered dashed section--padded">${studentObject.subject}</section>
//         <aside class="pushRight">${studentObject.info}</aside>
//     </div>`
//    }

// //Practice 2
// for (student of students){
//     let studentComponent = ""

//     if (student.score >= 60){
//         studentComponent = createStudentComponent(student, "passing")
//     }
//     else{
//         studentComponent = createStudentComponent(student, "failing")
//     }
    
//     document.querySelector("#container").innerHTML += studentComponent
// }

// Challenge: Composition of Smaller Components
// const h1 = (text, headingClassName) =>
// {
//     let createHeading = document.createElement("h1");
//     let headingText = document.createTextNode(text);
//     createHeading.setAttribute("class", `xx-large ${headingClassName}`)
//     createHeading.appendChild(headingText);
//     document.body.appendChild(createHeading);
// }

// const h1 = (text, headingClassName) =>
// {
//     return`
//     <h1 class="xx-large ${headingClassName}"> ${text} </h1>`
// }

// const section = (text) =>
// {
//     let createSection = document.createElement("section");
//     let sectionText = document.createTextNode(text);
//     createSection.setAttribute("class", "bordered dashed section--padded")
//     createSection.appendChild(sectionText);
//     document.body.appendChild(createSection);
// }

// const section = (text) =>
// {
//     return `<section class="bordered dashed section--padded">${studentObject.subject}</section>`
// }

// const aside = (text) =>
// {
//     let createAside = document.createElement("aside");
//     let asideText = document.createTextNode(text);
//     createAside.setAttribute("class", "pushRight")
//     createAside.appendChild(asideText);
//     document.body.appendChild(createAside);
// }

// const aside = (text) =>
// {
//     return`<aside class="pushRight">${studentObject.info}</aside>`
// }

// const createStudentComponent = (student, headingClassName) => {
// `
//     <div class="student">
//         ${h1(student.name, headingClassName)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>
// `
// }

// for (student of students){
//     let studentComponent = ""

//     if (student.score >= 60){
//         studentComponent = createStudentComponent(student, "passing")
//     }
//     else{
//         studentComponent = createStudentComponent(student, "failing")
//     } 
// }


// Challenge 2: Generic HTML Function
// const element = (elementType, text, className) =>
// {
//     let createElement = document.createElement(elementType);
//     let ElementText = document.createTextNode(text);
//     createElement.setAttribute("class", `${className}`)
//     createElement.appendChild(ElementText);
//     document.body.appendChild(createElement);
// }

const element = (elementType, text, className) =>
{
    return`
    <${elementType} class = "${className}"> ${text} </${elementType}>`
}

const createStudentComponent = (student, headingClassName) =>
   `
    <div id="student">
        ${element("h1", student.name, `xx-large ${headingClassName}`)}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>`


for (student of students){
    let studentComponent = ""

    if (student.score >= 60){
        studentComponent = createStudentComponent(student, "passing")
    }
    else{
        studentComponent = createStudentComponent(student, "failing")
    } 

    document.querySelector("#container").innerHTML += studentComponent
}

// Advanced Challenge: Using createElement for Components

// const chat = document.querySelector("#messages")


// const chatMessage1 = document.createElement('section')
// chatMessage1.className = "message"
// chatMessage1.textContent = "Are we doing fireworks this year?"

// chat.appendChild(chatMessage1)

// const chatMessage2 = document.createElement('section')
// chatMessage2.className = "message"
// chatMessage2.textContent = "After last year's 'tree incident', should we?"

// chat.appendChild(chatMessage2)

// const chatMessage3 = document.createElement('section')
// chatMessage3.className = "message"
// chatMessage3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire."

// chat.appendChild(chatMessage3)

// const chatMessage4 = document.createElement('section')
// chatMessage4.className = "message"
// chatMessage4.textContent = "We can set them off in the street."

// chat.appendChild(chatMessage4)

// const chatMessage5 = document.createElement('section')
// chatMessage5.className = "message"
// chatMessage5.textContent = "Our neighbors' houses are flammable, too"

// chat.appendChild(chatMessage5)

// console.log(chat)

//Advanced Challenge: DOM Fragments
const fragment = document.createDocumentFragment()

const chatMessage1 = document.createElement('section')
chatMessage1.className = "message"
chatMessage1.textContent = "Are we doing fireworks this year?"

fragment.appendChild(chatMessage1)

const chatMessage2 = document.createElement('section')
chatMessage2.className = "message"
chatMessage2.textContent = "After last year's 'tree incident', should we?"

fragment.appendChild(chatMessage2)

const chatMessage3 = document.createElement('section')
chatMessage3.className = "message"
chatMessage3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire."

fragment.appendChild(chatMessage3)

const chatMessage4 = document.createElement('section')
chatMessage4.className = "message"
chatMessage4.textContent = "We can set them off in the street."

fragment.appendChild(chatMessage4)

const chatMessage5 = document.createElement('section')
chatMessage5.className = "message"
chatMessage5.textContent = "Our neighbors' houses are flammable, too"

fragment.appendChild(chatMessage5)

// console.log(fragment)

document.querySelector("#messages").appendChild(fragment)