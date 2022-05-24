import myPic from '../../images/myPic.png';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
                {/* <div className="flex-containerTest"> */}
                    <div className='about-main-container'>
                        <div className="flexAbout">
                            ABOUT ME <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum dicta molestias, repudiandae ipsa repellendus porro quasi molestiae distinctio, similique eius excepturi amet tenetur odit? Aperiam inventore quam, nemo aliquam illum alias quod nam sint dolor ducimus architecto quisquam consequatur sit beatae rem laudantium saepe. Iure nihil quae unde culpa.
                        </div>  
                        <div className="about-image">
                            <img src={ myPic } className="picture" height="200px" width="400px"/>
                        </div>
                    </div>  
                {/* </div> */}
        </div>
    );
}
 
export default AboutMe;