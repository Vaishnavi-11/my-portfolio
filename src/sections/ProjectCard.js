import React , {useState} from 'react'

function ProjectCard(props) {
    const [flip,setFlip] = useState(false)

    const handleFlip = (e) => {
        console.log(flip)
        setFlip(!flip);
    }

    return (
        <div className="project_card">
            <div className="project_card_content">
                <div className="card_front" style={{transform:flip?'rotateY(180deg)':'rotateY(0deg)'}}>
                    <div className="card_image">
                        <img src={props.project.image} alt="" />
                    </div>
                    <div className="card_title">
                        <h3>{props.project.title}</h3>
                    </div>
                    <i className="flip fa fa-ellipsis-v" onClick={handleFlip}></i>
                </div>
                <div className="card_back" style={{ transform:flip?'rotateY(0deg)':'rotateY(180deg)'}}>
                    <div className="card_description">
                        <h4>Description:</h4>
                        <p>{props.project.description}</p>
                    </div>
                    <div className="card_language">
                        <h4>Language/s & Tools Used:</h4>
                        <p>{props.project.languages}</p>
                    </div>
                    <div className="card_repo">
                        <h4>View Repo:</h4>
                        <a href={props.project.repo} target='_blank' rel='noreferrer'><i className="fa fa-github-alt"></i></a>
                    </div>
                    <i className="flip fa fa-chevron-left" onClick={handleFlip}></i>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
