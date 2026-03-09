import Language from "./Language";
import '../styles/project.css'



export default function Project(props) {
    return (
        <div className="project-card fade-up" >
            <img src={props.imageSrc} />
            <div className="content-container">
                <h4>{props.title}</h4>
                <div className="desc-container">
                    <p>{props.description}</p>
                </div>

                <div className='languages-container'>
                    {props.languages.map((language) => (
                        <Language text={language} />
                    ))}
                </div>

                <div className="sources-container">
                    {props.gitHubSrc && <a href={props.gitHubSrc} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>}
                    {props.demoSrc && <a href={props.demoSrc} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>}

                </div>
            </div>

        </div>
    )
}