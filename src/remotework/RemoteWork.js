import style from './RemoteWork.module.css';
import styleContainer from './../common/styles/Container.module.css'


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <h2 className={style.title}>I Am Available For Freelance</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default RemoteWork;