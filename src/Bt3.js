import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Bt3 = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_avunxsj', 'template_10qypk7', form.current, 'haJWr8q1WJs3QW9q6')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return ( <>
    <div className= 'bt2main'>
    <div className = "bt2sub">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
       
    </div>

    </div>
    </> );
}
 
export default Bt3;

