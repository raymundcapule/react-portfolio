import myPic from '../../images/myPic.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="details">
                    <p className='hello'>----- HI</p>
                    <h1>I'm <span>Raymund</span>Capule</h1>
                    <p>A Jr. Web Developer working at Iscale Techologies</p>
                    <button className='download'>DOWNLOAD CV</button>
                </div>
                <div className="my-pic">
                    <img src={ myPic } className="picture" height="500px" />             
                </div>
            </div>    
        </div>
            
    );
}
 
export default Home;