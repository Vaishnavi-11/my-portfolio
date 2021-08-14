import React from 'react'

function SkillCard(props) {
    return (
        <div className="skill_card">
            <div className="skill_card_content">
                <div className="card_icon">
                <i className={props.skill.icon}></i>
                </div>
                <div className="card_heading">
                    <h3>-- {props.skill.name} --</h3>
                </div>
                <div className="card_content">
                    {
                        props.skill.languages.map((language) => {
                            return <ul key={language.id}>
                                <li>{language.name}</li>
                            </ul>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillCard
