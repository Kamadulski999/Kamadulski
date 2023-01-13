import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './skills.css'


function Skills() {
    return (
        <>        
        <Nav />
        <div className="skills">
            <div className="banner">Skills and Education</div>
            <div className="skill-container">
            <div className="card-container col-12 col-lg-4">
            <div className="card cert-card">
                    <div className="card-banner">Certifications</div>
                    <div className='btn-container'>                   
                    <a href="Andrew Kamadulski.pdf" className="skill-btn"><div className="btn">JavaScript Web Developer</div></a>
                    <a href="https://www.credly.com/badges/cc09723b-dfa3-4ccc-b85e-b2e44b8fe9f5" className="skill-btn"><div className="btn">AWS Cloud Practitioner</div></a>
                    </div>
            </div>
            <div className="skill-card card">             
            <div className="card-banner">Skills</div>
                <div className='skill-lists'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript ES6</li>
                    <li>React</li>                    
                    <li>Express.js</li>
                    <li>Node.js</li> 
                    <li>MongoDB</li>                    
                    <li>MySQL</li>
                    <li>Redux</li>                    
                </ul>
                <ul>
                <li>Mongoose</li>
                    <li>Sequelize</li>
                    <li>GraphQl</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Tailwind</li>                    
                    <li>REST API</li>                    
                    <li>Git</li>                   
                </ul>
            </div> 
            </div> 
            </div>
            <div className="card-container col-12 col-lg-7">
            <div className="education-card">
            <div className="card education-card">
            <div className="card-banner ml-2">Education</div>
            </div>
            </div>
            </div> 
            </div>           
            
                    
        </div>
        <Footer />
        </>
    )
};

export default Skills;