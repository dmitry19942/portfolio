import style from './RemoteWork.module.scss';
import Title from "../common/components/title/Title";
import {useRef, useState} from "react";
import HiringModal from "../common/components/modalWindow/ModalWindow";
import emailjs from "@emailjs/browser";


function RemoteWork() {

    const [activeModal, setActiveModal] = useState(false)

    const handlerModal = () => {
        setActiveModal(true)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_dmitry19942","template_sijxznb", form.current, "PgBz_Ps46Jy9q2Vtc")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById("form_hire").reset();
        alert('Offer sent!')
        setActiveModal(false)
    };

    return (
        <div className={style.remoteWorkBlock}>
                <div className={style.remoteWorkContainer}>
                    <Title text={'I Am Available For Freelance'}/>
                    <button className={style.button} onClick={handlerModal}>HIRE ME</button>
                    <HiringModal active={activeModal} setActive={setActiveModal}>
                        <div>
                            <div className={style.header}>
                                <h4>HAVE A PROJECT?</h4>
                                <p>I’m ready to help you. You just type details below,and/or send us a file.</p>
                            </div>
                            <form className={style.form} ref={form} onSubmit={sendEmail} id={'form_hire'}>
                                <div className={style.inputBlock}>
                                    <input type="text" placeholder="Your Name" name={"user_name"}/>
                                    <input type="text" placeholder="Your Project title" name={"project_title"}/>
                                    <input type="email" placeholder="Please enter Your Email" name={"user_email"}/>
                                </div>
                                <textarea placeholder="Your Message..." name={"message"}/>
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