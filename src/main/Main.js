import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import photoImage from '../assets/photo/photo.jpg'
import Particles from "react-tsparticles";
import {useCallback} from "react";
import {loadFull} from "tsparticles";


function Main() {

    const photo = {
        backgroundImage: `url(${photoImage}`,
    };

    const particlesOpt = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 1, max: 5},
            },
        },
        detectRetina: true,
    }

const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

return (

    <div id={'main'} className={style.mainBlock}>
        <Particles className={style.particles} id={'tsparticles'} init={particlesInit}
                   loaded={particlesLoaded} options={particlesOpt}/>
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