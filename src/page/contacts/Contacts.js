import Gmail from "../../images/gmail.png"
import Fb from "../../images/fb.png"
import Whatsapp from "../../images/whatsapp.png"
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from "react";

const Contacts = () => {
    const formRef = useRef()
    const [ok, setOk] = useState(false)   
    const [isPending, setIsPending] = useState(false)  

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);

        emailjs.sendForm('service_o5owlt9', 'template_ag9te4o', formRef.current, 'vJsgkP-lUEWHudpgA')
      .then((result) => {
          console.log(result.text);
          setOk(true)
          setIsPending(false);
      }, (error) => {
          console.log(error.text);
      });
    }

      useEffect(() => {

      }, []);  

    return ( 
        <div className="contact">
              <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="contact-title"> 
                        <h1>You may reach me at:</h1>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <img src={ Gmail } classname="contact-icon"/>
                                mondcapule@gmail.com
                            <div className="contact-info-item">   
                                <img classname=" " src={ Fb } alt=""/>
                                raymund_capule@yahoo.com
                            </div>
                            <div className="contact-info-item">
                                <img classname="contact-icon" src={ Whatsapp } alt=""/>
                                raymund.capule
                            </div>
                        </div>
                    </div>            
                </div>
                </div>
                <div className="contact-right">
                    <form ref={ formRef } onSubmit={handleSubmit}>
                        <input  type="text" required placeholder="Name" name="user_name" />
                        <input type="text" required placeholder="Subject" name="user_subject" />
                        <input type="text" required placeholder="Email" name="user_email" />
                        <textarea rows="5" required placeholder="Message" name="message" />
                        { !isPending && <button className="submit">Submit</button> }
                        { isPending && <button disabled>Sending...</button>}
                             <div className="submit-ok">{ ok && "Thank You!"} </div>
                    </form>
                </div>    
            </div>
        </div> 
    );
}
 
export default Contacts;