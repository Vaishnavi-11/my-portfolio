import React from 'react'
import SkillCard from './SkillCard'

function Skills(props) {
    return (
        <div id="skills" className="skills">
            <div className="skill_heading">
                <p></p>
                <h2>My Skills</h2>
            </div>
            <div className="skill_content">
                {
                    props.skills.map((skill) => {
                        return <div style={{display:'inline-block'}} key={skill.id}>
                            <SkillCard skill={skill}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills
