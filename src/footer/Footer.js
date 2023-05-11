import style from './Footer.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import telegramIcon from "../assets/icon/Telegram_logo.png";
import facebookIcon from "../assets/icon/facebookLogo.png";
import linkedinIcon from "../assets/icon/linkedinLogo.png";
import gmailIcon from "../assets/icon/gmailLogo.png";
import Fade from 'react-reveal/Fade';

function Footer() {

    const telegram = {
        backgroundImage: `url(${telegramIcon}`,
    };

    const facebook = {
        backgroundImage: `url(${facebookIcon}`,
    };

    const linkedin = {
        backgroundImage: `url(${linkedinIcon}`,
    };

    const gmail = {
        backgroundImage: `url(${gmailIcon}`,
    };

    const openInNewTab = url => {
        window.open(url);
    };

    return (
        <div className={style.footerBlock}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <a href={"#main"} className={style.a}>
                        <h2 className={style.title}>Dzmitry Harustovich</h2>
                    </a>
                    <div className={style.icons}>
                        <a onClick={() => openInNewTab('https://t.me/dmitriy19942')}>
                            <div className={style.icon} style={telegram}></div>
                        </a>
                        <a onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100050173746359&ref=bookmarks')}><div className={style.icon} style={facebook}></div>
                        </a>
                        <div className={style.icon} style={linkedin}></div>
                        <a onClick={() => openInNewTab('mailto:gorustovich2013@gmail.com')}>
                            <div className={style.icon} style={gmail}></div>
                        </a>
                    </div>
                    <span className={style.span}>© 2023, All Rights Reserved.</span>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;