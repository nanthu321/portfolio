import '../styles/project.css'

export default function Filter(props){
    return (
        <div  className={`filter ${props.activeFilter == props.text ? "active-filter" : ""}`} onClick={() => props.onClick(props.text)}>{props.text}</div>
    )
}