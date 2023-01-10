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
                <br></br><span>While not coding, I can often be found hiking in the woods with my wife and dogs. I love nature and spend quite a bit of my free time outdoors looking for cool fossils and rocks. I enjoy freshwater aquaria, breeding several species of fish in my home aquariums. In addition to my love of nature, I also enjoy gaming and playing tournament paintball.  </span>
            </p>            
        </div> 
        <div className="col-12">
            <div className="mt-5"><hr className='ml-5 mr-5'></hr></div>
        </div>
        <div className="col-12 about-section">
            <p className='about-p m-2'>
                <span className="about-section-banner">
                    How Did I Get Here? 
                </span><br></br><br></br><span>My path to coding has been quite the long and winding route. As a child my family owned a construction company and I began working in the trades while still young. From that experience I learned to enjoy working with a small team to meet project goals and the pleasure of seeing our efforts manifested into tangible results. Designing and building things has been a passion of mine from that early age. When I became older and attended college I chose to pursue my love of the natural sciences with a degree in Microbiology. Learning about complex Biological systems and how they interface and interact really stimulated my interests and fostered my love of not only Biology but also Chemistry. <br></br><br></br> After graduating college I had to choose between following a career path 
                as a Microbiologist or to return to the building trades. Due to financial considerations I re-entered the construction industry, where I worked until the recession of 2009 started. At that point construction work contracted severely and maintaining full time employment became difficult. So, I returned to school to pursue further education in Chemistry. After graduating from SIUE with my M.S. in Organic Chemistry I started a PhD program at UMSL where I was enrolled for 3 1/2 years. Unfortunately, the laboratory in which I was performing my dissertation research ran out of money and none of our grant applications were funded in that year's funding cycle. This left me in the unenviable position of deciding to wait another year in hopes that we would be more successful in the next grant funding cycle (with no guarantee), or to abandon
                 my PhD studies and begin working as a Chemist. I chose the latter.<br></br><br></br> My academic training and my true love in Chemistry is Organic Synthesis, particularly drug discovery. That type of research is not a focus here in St. Louis. While most of the basic research into design and synthesis is being performed at other locations, locally there are numerous manufacturing plants requiring Analytical Chemists to conduct Quality Control testing. I found success in this role however, it left me unfulfilled and wanting more. Quality Control testing is extremely repetitive and conducted under a very rigid system of procedures and protocols with no room for deviation. The ultimate goal is to test the product to a tight range of specifications and to get identical results 
                  by performing identical testing each time. This becomes very monotonous and leaves no room for improvements, adaptations, creativity or original thinking. In fact, those are actively discouraged to prevent deviation from Standard Operating Procedures. <br></br><br></br> At first, it was interesting as I learned a new way of thinking and how to perform the role of scientist in a business environment but after a short period I had learned the job requirements and it became a routine. I missed the constant learning and personal growth of academia and the freedom to think and explore new ideas. Working within the confines of a highly regulated Quality Control lab was stifling to my natural intellectual curiosity and felt tedious. Looking for a change of pace to break the monotony, I took a short term contract job assisting on a Data Migration project. The laboratory was transitioning from SAP to a 
                 Laboratory Integrated Management System (LIMS). My role was to assist in data collection, cleaning, and uploading into the database as well as setting all manual configurations necessary within the software. After helping with the set up of the development databases and servers, I then assisted in testing the User Interface and troubleshooting and fixing problems with the system.<br></br><br></br> While working on that project I was operating under Agile management with daily scrums, scheduled deliverables, and a very talented team of people to work alongside. It seemed this type of environment is exactly what I had been missing. I decided then to seek out more training and education in computer science. Along with the enjoyment of working on a small project based team, the idea of a constantly evolving and changing field where there are always new things to learn and explore really excited me. <br></br><br></br> The first step 
                 of my journey was enrolling in a Full-Stack JavaScript Web Developer Bootcamp at Washington University in St. Louis. During that time I devoted myself full time to learning JavaScript and understanding the MERN stack. While studying in bootcamp I fell in love with coding and making web apps. I found that much of what I learned as an Organic Chemist such as basic logic, problem solving, design patterns, troubleshooting and other skills carried over directly into coding. Once again I was seeing immediate tangible results of my efforts as I designed new things and then worked to implement those ideas.<br></br><br></br> After graduation, I have continued learning on my own with help from several Udemy courses. I have also been studying the AWS cloud and just recently passed the AWS Cloud Practitioner Certification exam. Currently, I am seeking my first role as an entry level web developer in order to continue this journey. I look forward to joining a team and learning from others with experience who will help me grow as a new developer.</span>
            </p>            
        </div> 
        </div>  
        <Footer />     
        </>
    )}

export default About;