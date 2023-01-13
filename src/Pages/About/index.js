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
            <p className="about-p">
                <span className="about-section-banner">
                'Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.'
                 — Albert Einstein
                </span><br></br><br></br><br></br><span>Throughout my professional life I've worn many hats; laborer, craftsman, scientist, teacher, and now programmer. These experiences instilled in me a passion for designing and building new things. Working with teams of talented, like minded people to support each other as we grow and move towards our goals has been the greatest part of this journey. I love sharing and working with other passionate people to develop our ideas and to find new solutions. </span><br></br><br></br>     
            </p>
        </div>
            <div className="col-12">
            <div className="mt-5"><hr className='m-5'></hr></div>
        </div>
        <div className="about-section col-12">
            <div className="about-images">
                <div className="col-4 about-img"><img src="Zelda.jpg" alt="" /></div>
                <div className="col-4 about-img"><img src="Wedding.jpg" alt="" /></div>
                <div className="col-4 about-img"><img src="Suspects.jpg" alt="" /></div>
                
            </div>
        </div>
        <div className="col-12 about-section">
            <p className='about-p'>               
                <br></br><span>While not coding, I can often be found hiking in the woods with my wife and dogs. I love nature and spend quite a bit of my free time outdoors looking for cool fossils and rocks. I enjoy freshwater aquaria, breeding several species of fish in my home aquariums. In addition to my love of nature, I also spend time gaming and playing tournament paintball.  </span>
            </p>            
        </div> 
        <div className="col-12">
            <div className="mt-5"><hr className='ml-5 mr-5'></hr></div>
        </div>
        <div className="col-12 about-section">
            <p className='about-p m-2'>
                <span className="about-section-banner">
                    A New Direction
                </span><br></br><br></br><span>My academic training is Organic Synthesis, specifically drug discovery. Unfortunately, that type of research is not a focus here in St. Louis. While most of the basic research into design and synthesis is being performed at other locations, locally there are numerous manufacturing plants requiring Analytical Chemists to conduct Quality Control testing. I found success in this role. However, it left me unfulfilled and wanting more.
                 <br></br><br></br> Looking for a change of pace to break the monotony, I took a short term contract job assisting on a Data Migration project. The laboratory was transitioning from SAP to a 
                 Laboratory Integrated Management System (LIMS). My role was to assist in data collection, cleaning, and uploading into the database as well as setting configurations manually where necessary within the software. After helping with the set up of the development databases and servers, I then assisted in testing the User Interface and troubleshooting and fixing problems with the system.<br></br><br></br> While working on that project I was operating under Agile management with daily scrums, scheduled deliverables, and a very talented team of people to work alongside. It seemed this type of environment is exactly what I had been missing. I decided then to seek out more training and education in computer science. Along with the enjoyment of working on a small project based team, the idea of a constantly evolving and changing field where there are always new things to learn and explore really excites me. <br></br><br></br> The first step 
                 of my journey was enrolling in a Full-Stack JavaScript Web Developer Bootcamp at Washington University in St. Louis. During that time I devoted myself full time to learning JavaScript and understanding the MERN stack. While studying in bootcamp I fell in love with coding and making web apps. I found that much of what I learned as an Organic Chemist such as basic logic, problem solving, design patterns, troubleshooting and other skills carried over directly into coding. Once again I was seeing immediate tangible results of my efforts as I designed new things and then worked to implement those ideas.<br></br><br></br> After graduation, I have continued learning on my own with help from several Udemy courses. I have also been studying the AWS cloud and just recently passed the AWS Cloud Practitioner Certification exam. Currently, I am seeking my first role as an entry level web developer in order to continue this journey. I look forward to joining a team as a Junior Developer and learning from others with experience who will help me grow in this career.</span>
            </p>            
        </div> 
        </div>  
        <Footer />     
        </>
    )}

export default About;