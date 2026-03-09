import '../styles/skills.css'
import TextWrapper from './TextWrapper';
import SkillCard from './SkillCard';


export default function Skills(){
    return(
        <section className='fade-up' id="skills-container">
            <h2>Skills & Technologies</h2>
            <TextWrapper text="A strong skill set to develop complete web applications from design to deployment."/>

            <div className='skills-cards'>
                <SkillCard heading="Frontend" skills={["React","Java Script","HTML","CSS","OM"]} headingColor="#22d3ee" boxShadow="0 0 30px rgba(34, 211, 238, 0.5)"/>
                <SkillCard heading="Backend" skills={["Java","Node JS","Express","MySQL","Rest APIs"] }  headingColor="#2563eb"  boxShadow="0 0 30px rgba(59, 130, 246, 0.5)"/>
                <SkillCard heading="Tools & Others" skills={["Git","VS Code","Om Studio","Eclipse","ZohoCode","Chat GPT","Gemini"]}  headingColor="#9333ea" /> 
            </div>
        </section>
    );
}
 