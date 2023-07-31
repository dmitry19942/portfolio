import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {useRef} from "react";
import emailjs from '@emailjs/browser';



function Contacts() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_dmitry19942","template_1nilnhs", form.current, "PgBz_Ps46Jy9q2Vtc")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById("form_contacts").reset();
        alert('Message sent!')
    };

    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade left>
                <div className={style.contactsContainer}>
                    <Title text={'Contacts'}/>
                    <form action="" className={style.formContainer} ref={form} onSubmit={sendEmail} id={'form_contacts'}>
                        <input type="text" className={style.input} placeholder={'Your Name'} name={"user_name"}/>
                        <input type="text" className={style.input2} placeholder={'Your Email'} name={"user_email"}/>
                        <textarea name="message" id="" cols="30" rows="5" className={style.textarea} placeholder={'Your Message'}></textarea>
                        <button type='submit' className={style.button}>SEND MESSAGE</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;