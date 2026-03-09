import '../styles/contact.css'

export default function ContactCard(props){
    const Icon = props.icon;

    return (
        <div className="contact-card">
            <div className="icon-container">
                <Icon size={28}/>
            </div>

            <div className="contact-detail">
                <p>{props.name}</p>
                <h3>{props.contact}</h3>
            </div>
        </div>
    )
}