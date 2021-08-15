import React from 'react'

function About(props) {
    return (
        <div className="about" id="about">
            <div className="about_heading">
                <p></p>
                <h2>About Me</h2>
            </div>
            <div className="about_content">
                <div className="about_intro">
                    <h4>Hello there!</h4>
                    <p>Myself Vaishnavi and here's a little about me....</p> 
                    <p>I'm 20 years of age and am based in Bengaluru, Karnataka. 
                        Currently a second-year student pursuing my Bachelors of Engineering Degree at B.M.S College of Engineering. </p>
                    <p>I am a dedicated and hard-working person. I enjoy coding and this is what drives me to explore and strenghten my knowledge.
                        I have persistently been focusing on learning new frameworks and trying to work on the ones best suited to my interests and hope to continue the same </p>
                    <p>Apart from the geeky side, my other hobbies would be listening to music (just like most of us xD). I do love to read
                        books, sketch or play some video games during my free time.</p>
                </div>
                <div className="about_education">
                    <h4>Education</h4>
                    {
                        props.education.map((education) => {
                            return <ul key={education.id}  className="about_education_content">
                                <li>
                                    <div style={{display:'inline-block',verticalAlign:'top'}}>
                                        <h5>{education.study}</h5>
                                        <p>{education.institute}</p>
                                        <p>{education.year}</p>
                                        <p>{education.grade}</p>
                                        <p>{education.accomplishment}</p>
                                    </div>
                                </li>
                            </ul>
                        })
                    }
                </div>
                <div className="about_certificates">
                    <h4>Certifications</h4>
                    {
                        props.certification.map((certificate) => {
                            return <ul key={certificate.id}  className="about_certificates_content">
                                <li>
                                    <div style={{display:'inline-block',verticalAlign:'top'}}>
                                        <h5>{certificate.course_name}</h5>
                                        <p>{certificate.platform} | {certificate.institute}</p>
                                        <p>{certificate.date}</p>
                                    </div>
                                </li>
                            </ul>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About
