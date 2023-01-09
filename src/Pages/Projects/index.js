import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './projects.css'


function Projects() {
    return (
        <>        
        <Nav />
        <div>
            <div className="banner">Projects</div>
            <div className="card-container">
            <div className="card col-12 col-med-6 col-lg-4">card</div>
            <div className="card col-12 col-med-6 col-lg-4">card</div>
            <div className="card col-12 col-med-6 col-lg-4">card</div>                     
            </div>
        </div>
        <Footer />
        </>
    )
};

export default Projects;