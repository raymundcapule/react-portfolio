const Contacts = () => {
    
    return ( 
        <div className="contacts">
            <div className="contact-container">
                <div className="email">
                    {/* <h1>Contacts:</h1> */}
                        <h3>Email Me</h3>
                            <form action="">
                                <label>Name</label>
                                <input
                                    type="text"
                                    required
                                />  
                                <label>Email</label>
                                <input
                                    type="text"
                                    required
                                /> 
                                <label>Cel No. </label>
                                <input
                                    type="number"
                                    required
                                /> 
                                <label>Subject</label>
                                <input
                                    type="text"
                                    required
                                /> 
                                <label>Comment</label>
                                <input className="comment-input"
                                    type="text"
                                    required
                                /> 
                            </form>
                </div>
            </div>        
        </div>
    );
}
 
export default Contacts;