import style from './RemoteWork.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <Title text={'I Am Available For Freelance'}/>
                <button className={style.button}>HIRE ME</button>
            </div>
        </div>
    );
}

export default RemoteWork;