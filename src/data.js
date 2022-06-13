import myImage from './assets/me.jpg'
import myResume from './assets/VaishnaviN_Resume.pdf'
import proj1 from './assets/project1.png'
import proj2 from './assets/project2.png'
import proj3 from './assets/project3.png'
import proj4 from './assets/project4.JPG'
import proj5 from './assets/project5.jpg'

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
            languages: "HTML, CSS, JavaScript, PHP",
            repo: "https://github.com/Vaishnavi-11/health-and-fitness"
        },
        {
            id: 3,
            image: proj3,
            title: "Food Ordering Application",
            description: "A GUI application built for a restaurant using Swing.",
            languages: "Java, MySQL",
            repo: "https://github.com/Vaishnavi-11/food-ordering-system"
        },
        {
            id: 4,
            image: proj4,
            title: "File Security System",
            description: "A system which can be used for encryption and decryption of files in a UNIX/Linux environment.",
            languages: "Shell Scripting",
            repo: "https://github.com/Vaishnavi-11/FileSecuritySystem"
        },
        {
            id: 5,
            image: proj5,
            title: "Notes Nest",
            description: "An android app that makes it easy for students to take notes and also store pdf of notes in one place. ",
            languages: "Java, Google Firebase, Android Studio",
            repo: "https://github.com/Vaishnavi-11/notes-nest"
        },
    ],
    links: {
        linkedin:"https://www.linkedin.com/in/vaishnavi-nagaraj-3a96541a0/",
        instagram:"https://www.instagram.com/_vaishnavi91_/",
        facebook:"https://m.facebook.com/vaishnavi.nagaraj.3",
        github:"https://github.com/Vaishnavi-11"
    },
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.519183836754!2d77.54833731464412!3d12.874301990919772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzI3LjUiTiA3N8KwMzMnMDEuOSJF!5e0!3m2!1sen!2sin!4v1628358460710!5m2!1sen!2sin",
    education: [
        {
            id: 1,
            study: "B.E in Information Science and Engineering",
            institute: "B.M.S College of Engineering",
            grade: "9.7 CPGA",
            year: "2019 - Current"
        },
        {
            id: 2,
            study: "Class 12",
            institute: "Sri Bhagawan Mahaveer Jain College",
            grade: "97.83%",
            accomplishment: "State 8th Rank",
            year: "2019"
        },
        {
            id: 3,
            study: "Class 10",
            institute: "Acharya Patashala Public School",
            grade: "92%",
            year: "2017"
        }
    ],
    certifications: [
        {
            id: 1,
            course_name: "Web Design for Everybody Specialization",
            platform: "Coursera",
            institute: "University of Michigan",
            date: "July 2020"
        },
        {
            id: 2,
            course_name: "Python for Everybody Specialization",
            platform: "Coursera",
            institute: "University of Michigan",
            date: "June 2020"
        },
        {
            id: 3,
            course_name: "Programming in C++",
            platform: "NPTEL",
            institute: "Indian Institute of Science",
            date: "December 2020"
        },
        {
            id: 4,
            course_name: "Building Web Applications in PHP",
            platform: "Coursera",
            institute: "University of Michigan",
            date: "September 2020"
        },
        {
            id: 5,
            course_name: "Developing Cloud Applications with Node.js and React",
            platform: "edX",
            institute: "IBM",
            date: "June 2021"
        }
    ]
}