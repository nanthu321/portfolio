import ContactCard from "./ContactCard"
import TextWrapper from "./TextWrapper"
import '../styles/contact.css'
import { Mail, Phone, MapPin,IdCard } from "lucide-react";


export default function Contact(){
    return (
        <section id="contact-container" className="container fade-up">
            <h2>Get In Touch</h2>
            <TextWrapper text="I am open to opportunities and would be happy to discuss how my skills can contribute to your team. Feel free to reach out for further discussion."/>

            <div className="contact-cards">
                <ContactCard icon={IdCard} name="Emp Id" contact="ZSTTK431/25"/>
                <ContactCard icon={Mail} name="Email" contact="nantha.r@zohocorp.com"/>
                <ContactCard icon={MapPin} name="Location" contact="Alangulam, Tenkasi"/>
            </div>
        </section>
    )
}