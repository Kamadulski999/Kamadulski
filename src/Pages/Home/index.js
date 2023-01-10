import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Hello from '../../components/Hello';
import './home.css'



const Home = () => {
    return (
        <>        
        <Nav />
        <div className='home-container'>
        <Hello />
        <div className="col-12"><hr className="m-5"></hr></div>
        <div className="welcome">
            <p>Thanks for visiting my page. Please take a few moments to check out my featured projects and to look at the skills page. If you like what you see or have any questions or comments feel free to reach out. I'd love to hear about exciting new opportunities and to connect with other people who share similar interests.</p>
        </div>
        </div>
        <Footer />
        </>
    )
};

export default Home;