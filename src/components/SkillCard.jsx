import Skill from "./Skill";

export default function SkillCard(props) {
    return (
        <div className='skills-card' style={{ "--hover-glow": props.boxShadow }}>
            <h3 style={{color:props.headingColor}}>{props.heading}</h3>
            
            <div className='skills'>
                {props.skills.map((skill)=>(
                        <Skill text={skill}/>
                    ))
                }
            </div>
        </div>
    );
}