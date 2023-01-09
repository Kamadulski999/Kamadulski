import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Hello from "../../components/Hello";
import './about.css'



const About = () => {
    
    return(
        <>
        <Nav/>        
        <div className="about-container">
            <Hello/>            
        <div className="col-12"><hr className='m-5'></hr></div>                  
        <div className="col-12 about-section">
            <p>
                <span className="about-section-banner">
                'Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.'
                 — Albert Einstein
                </span><br></br><br></br><br></br><span>Throughout my professional life I've worn many hats; laborer, craftsman, scientist, teacher, and now programmer. These experiences instilled in me a passion for designing and building new things. Working with teams of talented, like minded people to support each other as we grow and move towards our goals has been the greatest part of this journey. I love sharing and working with other passionate people to develop our ideas and to find new solutions. </span><br></br><br></br>     
            </p>
        </div>
            <div className="col-12">
            <p className="mt-5"><hr className='m-5'></hr></p>
        </div>
        <div className="about-section col-12">
            <div className="about-images">
                <div className="col-4 about-img"><img src="https://via.placeholder.com/140x100" /></div>
                <div className="col-4 about-img"><img src="https://via.placeholder.com/140x100" /></div>
                <div className="col-4 about-img"><img src="https://via.placeholder.com/140x100" /></div>
            </div>
        </div>
        <div className="col-12 about-section">
            <p>               
                <br></br><span>While not coding, I can often be found hiking in the woods with my wife and dogs. I love nature and spend quite a bit of my free time outdoors looking for cool fossils and rocks. I also am a freshwater aquarist, breeding several species of fish in my numerous home aquariums. In addition to my love of nature, I enjoy gaming and playing tournament paintball as well.  </span>
            </p>            
        </div> 
        <div className="col-12">
            <p className="mt-5"><hr className='m-5'></hr></p>
        </div>
        <div className="col-12 about-section">
            <p>
                <span className="about-section-banner">
                    A New Direction
                </span><br></br><span>Story of moving from being a scientist to a programmer.</span>
            </p>            
        </div> 
        </div>  
        <Footer />     
        </>
    )}

export default About;