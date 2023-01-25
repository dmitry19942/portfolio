import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="" className={style.formContainer}>
                        <input type="text" className={style.input}/>
                        <input type="text" className={style.input}/>
                        <textarea name="" id="" cols="30" rows="5" className={style.textarea}></textarea>
                </form>
                <button type='submit' className={style.button}>Send message</button>
            </div>
        </div>
    );
}

export default Contacts;