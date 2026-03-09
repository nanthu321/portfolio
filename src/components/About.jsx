import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/about.css'
import TextWrapper from './TextWrapper';

function About() {
    return (
        <section className='about-container fade-right' id='about-container' >
            <div class="profile-wrapper">
                <img src="./src/assets/images/nantha.jpg" alt="Profile Image" className='profile-image' />
            </div>
            <h1><span>Hi, I'm </span>Nanthakumar</h1>

            <p className="typing-animation"></p>

            <TextWrapper text="I'm Trained in Full Stack Development with a passion for building modern web applications.
Focused on creating efficient frontends and backend systems.
Continuously learning new technologies and improving through real world projects.
Dedicated to building scalable and user friendly digital experiences." />

            <div className="button-container">
                <a href="#projects-container"><button id='btn-view-project'>View Project</button></a>
                <a href="#contact-container"><button id='btn-contact-me'>Contact Me</button></a>
            </div>

            <div className="social-icons">
                <a href="https://github.com/nanthu321" target='_blank'>
                    <i className="fab fa-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/nanthakumar-r-b74a70368/" target='_blank'>
                    <img src="./src/assets/images/linkedin.svg" alt="" />
                </a>

                <a href="https://www.codewars.com/users/Nanthakumar%20R" target='_blank'>
                    <img src="./src/assets/images/codewars.svg" alt="" />
                </a>
            </div>
        </section>

    );
}

export default About;




