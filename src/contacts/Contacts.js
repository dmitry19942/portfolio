import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="">
                    <div>
                        <input type="text" className={style.input}/>
                    </div>
                    <div>
                        <input type="text" className={style.input}/>
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="5" className={style.textarea}></textarea>
                    </div>
                </form>
                <button className={style.button}>Send message</button>
            </div>
        </div>
    );
}

export default Contacts;