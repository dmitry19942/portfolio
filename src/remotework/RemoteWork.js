import style from './RemoteWork.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {useState} from "react";
import HiringModal from "../common/components/modalWindow/ModalWindow";



function RemoteWork() {

    const [activeModal, setActiveModal] = useState(false)

    const handlerModal = () => {
        setActiveModal(true)
    }

    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <Title text={'I Am Available For Freelance'}/>
                <button className={style.button} onClick={handlerModal}>HIRE ME</button>
                <HiringModal active={activeModal} setActive={setActiveModal}>
                    <div>
                        <div className={style.header}>
                            <h4>HAVE A PROJECT?</h4>
                            <p>I’m ready to help you. You just type details below,and/or send us a file.</p>
                        </div>
                        <form className={style.form}>
                            <div className={style.inputBlock}>
                                <input type="text" placeholder="Your Name"/>
                                <input type="text" placeholder="Your Project title"/>
                                <input type="email" placeholder="Please enter Your Email"/>
                            </div>
                            <textarea placeholder="Your Message..."/>
                            <div className={style.btn}>
                                <button className={style.button}>
                                    Send Offer
                                </button>
                            </div>
                        </form>
                    </div>
                </HiringModal>
            </div>
        </div>
    );
}

export default RemoteWork;