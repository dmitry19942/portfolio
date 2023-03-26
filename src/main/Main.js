import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import photoImage from '../assets/photo/photo.jpg'



function Main() {

    const photo = {
        backgroundImage: `url(${photoImage}`,
    };

    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h5>HELLO, MY NAME IS</h5>
                    <h1>DZMITRY HARUSTOVICH</h1>
                    <h5>FRONT-END DEVELOPER</h5>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
}

export default Main;