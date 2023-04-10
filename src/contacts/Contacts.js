import style from './Contacts.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form action="" className={style.formContainer}>
                        <input type="text" className={style.input} placeholder={'Your Name'}/>
                        <input type="text" className={style.input2} placeholder={'Your Email'}/>
                        <textarea name="" id="" cols="30" rows="5" className={style.textarea} placeholder={'Your Message'}></textarea>
                </form>
                <button type='submit' className={style.button}>SEND MESSAGE</button>
            </div>
        </div>
    );
}

export default Contacts;