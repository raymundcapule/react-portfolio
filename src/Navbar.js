import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    
    const [showBurger, setShowBurger] = useState(false)
    
    // const [showBurger, setShowBurger] = useState('topnav')
   
    const handleClick = () => {
        setShowBurger(!showBurger);
        // if (showBurger == 'topnav') {
        //     setShowBurger('responsive')
        // }
        // else{
        //     setShowBurger('topnav')
        // }
    }
    
    return (  
            <div className={showBurger ? "responsive" : "topnav"}>
            {/* <div className={showBurger}> */}

                <div className='topnav-links'>
                    <Link to="home" className=''>Home</Link>
                    <Link to="projects">Projects</Link>
                    <Link to="aboutMe">About</Link>
                    <Link to="contacts">Contacts</Link>
                </div>   
                <div className="icon" onClick={ () => handleClick() }>
                    <i className="fa fa-bars" style={{width: 5, height: 5}}/>
                </div>
                
            </div>    
    );
}
 
export default Navbar;