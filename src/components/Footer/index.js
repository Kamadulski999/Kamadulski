import "./footer.css";
import Resume from "./Resume.pdf";


function Footer() {
       return (
        <> 
        <div className="footer-container">        
        <div className="footer pl-5">
        <a href="/">Home</a><br></br>
        <a href="https://www.facebook.com/Kamadulski99">Facebook</a><br></br>
        <a href="https://www.linkedin.com/in/andrew-kamadulski-19b943196">LinkedIn</a><br></br>
        <br></br>
        </div>
        <div className="footer mobile-hide">Andrew Kamadulski<br></br>React Web Developer<br></br>St. Louis, Mo  USA</div>
        <div className="footer pr-5">
        <a href="https://github.com/Kamadulski999/">Github</a><br></br>
        <a href="mailto:andrew.kamadulski@gmail.com">Email</a><br></br>
        <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
        </div>  
        </>
    )
};

export default Footer;