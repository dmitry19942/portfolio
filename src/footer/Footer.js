import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Dzmitry Harustovich</h2>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.iconLast}></div>
                </div>
                <span>© 2023, All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;