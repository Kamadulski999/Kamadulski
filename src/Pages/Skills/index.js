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
                    <div className="skill-btn"><a href="https://www.clickdimensions.com/links/TestPDFfile.pdf" target="_blank"  
                    rel="noreferrer"><div className="btn">JavaScript Web Developer</div></a></div>
                    <div className="skill-btn"><a href="https://www.credly.com/badges/cc09723b-dfa3-4ccc-b85e-b2e44b8fe9f5"><div className="btn">AWS Cloud Practitioner</div></a></div>
                    </div>
                    
            </div>
            <div className="skill-card card">             
            <div className="card-banner">Skills</div>
                <div className='skill-lists'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript ES6</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Redux</li>   
                    <li>Express.js</li>                                    
                    <li>MongoDB</li>                    
                    <li>MySQL</li>                                     
                </ul>
                <ul>
                <li>Mongoose</li>
                    <li>Sequelize</li>
                    <li>GraphQL</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>Tailwind</li>                    
                    <li>REST APIs</li>                    
                    <li>Git</li>                   
                </ul>
            </div> 
            </div> 
            </div>
            <div className="card-container col-12 col-lg-7">
            <div className="education-card">
            <div className="card education-card">
            <div className="card-banner ml-2">Education</div>
            <div className='education'>
                <div>Coding Bootcamp - Washington University in St Louis</div>
                <div>M.S. Chemistry - Southern Illinois University Edwardsville</div>
                <div>B.S. Microbiology - Northern Arizona University </div>                   
            </div>
            <div className="card-banner ml-2 mt-5">Awards</div>
            <div className='education'>
                <div>3 Year Graduate (B.S.) - Magna Cum Laude </div>  
                <div>Bouman Prize - Awarded for the best graduate research presentation of the year at SIUE </div>
                <div>Sigma Xi Outstanding Graduate Student </div>
                <div>American Chemical Society Analytical Chemistry Award </div>                   
            </div>
            <div className="card-banner ml-2 mt-5">Current Studies</div>
            <div className='education'>
                <div>TypeScript</div>
                <div>React Native</div>  
                <div>React Testing Library and Jest </div>
                <div>Data Structures and Algorithms</div>                   
            </div>                
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