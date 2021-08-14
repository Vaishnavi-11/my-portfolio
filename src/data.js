import myImage from './assets/me.jpeg'
import myResume from './assets/VaishnaviN_Resume.pdf'
import proj1 from './assets/project1.png'
import proj2 from './assets/project2.png'
import proj3 from './assets/project3.png'
import proj4 from './assets/project4.JPG'

export const data = {
    name: "Vaishnavi N",
    email: "vaishnavinagaraj790@gmail.com",
    image: myImage,
    role: "Information Science Undergrad",
    short_about: "An ambitious student , aspiring to become a full-fledged software developer.",
    resume: myResume,
    skills: [
        {
            id:1,
            name: "Frontend",
            languages: [
                {id:1,name:"HTML/CSS"},
                {id:2,name:"JavaScript"},
                {id:3,name:"ReactJS"}
            ],
            icon:"fa fa-cogs"
        },
        {
            id:2,
            name: "Backend",
            languages: [
                {id:1,name:"C/C++"},
                {id:2,name:"Java"},
                {id:3,name:"PHP"},
                {id:4,name:"Python"},
                {id:5,name:"MySQL"},
                {id:6,name:"MongoDB"}
            ],
            icon:"fa fa-database"
        },
    ],
    projects: [
        {
            id: 1,
            title: "Grocery Management System",
            image: proj1,
            description: "A console-based grocery management application for managing the tasks of ordering and delivering grocery items to customers.",
            languages: "C++",
            repo: "https://github.com/Vaishnavi-11/grocery-management-system"
        },
        {
            id: 2,
            image: proj2,
            title: "Health & Fitness Website",
            description: "A fitness website built for a gym that provides fitness courses and health facts.",
            languages: "HTML/CSS/JavaScript/PHP",
            repo: "https://github.com/Vaishnavi-11/health-and-fitness"
        },
        {
            id: 3,
            image: proj3,
            title: "Food Ordering Application",
            description: "A GUI application built for a restaurant using Swing.",
            languages: "Java/MySQL",
            repo: "https://github.com/Vaishnavi-11/food-ordering-system"
        },
        {
            id: 4,
            image: proj4,
            title: "File Security System",
            description: "A system which can be used for encryption and decryption of files in a UNIX/Linux environment.",
            languages: "Shell Scripting",
            repo: "https://github.com/Vaishnavi-11/FileSecuritySystem"
        }
    ]
}