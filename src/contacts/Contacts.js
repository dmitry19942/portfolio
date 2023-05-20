import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';


function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade left>
                <div className={style.contactsContainer}>
                    <Title text={'Contacts'}/>
                    <form action="" className={style.formContainer}>
                        <input type="text" className={style.input} placeholder={'Your Name'}/>
                        <input type="text" className={style.input2} placeholder={'Your Email'}/>
                        <textarea name="" id="" cols="30" rows="5" className={style.textarea} placeholder={'Your Message'}></textarea>
                        <button type='submit' className={style.button}>SEND MESSAGE</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;