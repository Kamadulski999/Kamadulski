import './footer.css'


function Footer() {
    const resume = () => {
        console.log("click")
    }
    const github = () => {
        console.log("click")
    }
    const email = () => {
        console.log("click")
    }
    const linkedIn = () => {
        console.log("click")
    }
    return (
        <> 
        <div className="footer-container">
        <div className="footer">Andrew Kamadulski<br></br>React Web Developer<br></br>St. Louis, Mo  USA</div>
        <div className="footer"> 
        <br></br>                     
            <span onClick={resume}>RESUME</span>             
        </div>
        <div className="footer">
            <span onClick={github}>Github</span><br></br>
            <span onClick={email}>Email</span><br></br>
            <span onClick={linkedIn}>LinkedIn</span></div>   
        </div>  
        </>
    )
};

export default Footer;