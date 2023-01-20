import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './projects.css'


function Projects() {
    const cardsArr = [{
        title: "Lilith Photography",
        image: "Lilith.png",
        url: "//www.lilithphotography.com",
        github: "https://github.com/Kamadulski999/Lilith_Photography", 
        text: "This site for my wife's photography business features Express.js for serving images to the React front end and NodeMailer for sending emails from the contact page."  
        },
        {
        title: "Trivia Trainer",
        image: "Trivia.png",
        url: "https://main.d2e1ulzezimtka.amplifyapp.com/",
        github: "//github.com/Kamadulski999/Train4Trivia", 
        text: "Trivia Trainer is a game that asks users for a trivia category and the number of questions to answer, then fetchs the appropriate data from The Open TriviaDB API for display."   
        },
        {
        title: "Horror Scorer",
        image: "Horror.png",
        url: "https://afternoon-ridge-57186.herokuapp.com/",
        github: "https://github.com/Kamadulski999/Horror_Scorer", 
        text: "Horror Scorer is a full stack social media app that allows horror movie fans to discuss their favorite movies with their friends. Movie information and ratings provided from TheMovieDB API."      
        }]

 

    return (
        <>         
        <Nav />
        <div className='m-2'>
            <div className="banner">Projects</div>
            <div className="card-container">
            {cardsArr.map(({title, text, url, github, image})=>{
            return (
                <div className="card project-card col-12" key={title}>
                <div className="card-title">{title}</div>
                <div className="images"><img className="card-image" src={`/assets/images/${image}`} alt=""/></div>
                <div>    
                <div>            
                <p className="card-text mt-5">{text}</p>
                </div>
                <div className='card-link'>
                    <div className="btn-container">
                <a href={url}><div className='btn'>Website</div></a>
                <a href={github}><div className='btn'>GitHub</div></a>
                </div>
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