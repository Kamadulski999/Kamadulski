import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './projects.css'


function Projects() {
    const cardsArr = [{
        title: "Lilith Photography",
        image: "Lilith.png",
        url: "//www.lilithphotography.com",
        github: "https://github.com/Kamadulski999/", 
        text: "This site for my wife's photography business features Express.js for serving images to the React front end and NodeMailer for sending emails from the contact page."  
        },
        {
        title: "Trivia Trainer",
        image: "Trivia.png",
        url: "//www.lilithphotography.com",
        github: "//github.com/Kamadulski999/Train4Trivia", 
        text: "Trivia Trainer allows users to select a category and number of questions and then access The Open TriviaDB API to populate the question and answers for a game."   
        },
        {
        title: "Horror Scorer",
        image: "Horror.png",
        url: "//www.lilithphotography.com",
        github: "https://github.com/Kamadulski999/", 
        text: "Horror Scorer is a horror themed social media app that allows Horror movie fans to discuss and rate their favorite movies."      
        }]

 

    return (
        <>         
        <Nav />
        <div>
            <div className="banner">Projects</div>
            <div className="card-container">
            {cardsArr.map(({title, text, url, github, image})=>{
            return (
                <div className="card col-12 col-med-6 col-lg-4" key={title}>
                <div className="card-title">{title}</div>
                <img className="card-image" src={image} alt=""/>
                <div>                
                <p className="card-text mt-5">{text}</p>
                <div className='card-link'>
                <div className='btn  mt-5'><a href={url}>Deployment</a></div>
                <div className='btn'><a href={github}>GitHub</a></div>
                </div>
                </div>
            </div>
            )
        })}                    
            </div>
        </div>
        <Footer />
        </>
    )
};

export default Projects;