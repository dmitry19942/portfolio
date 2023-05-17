import style from './Main.module.scss';
import photoImage from '../assets/photo/photo.jpg'
import Particles from "react-tsparticles";
import {useCallback} from "react";
import {loadFull} from "tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt'


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

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 400,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (

        <div id={'main'} className={style.mainBlock}>
            <Particles className={style.particles} id={'tsparticles'} init={particlesInit}
                       loaded={particlesLoaded} options={particlesOpt}/>
            <Fade top>
                <div className={style.mainContainer}>
                    <div className={style.text}>
                        <h5>HELLO, MY NAME IS</h5>
                        <h1>DZMITRY HARUSTOVICH</h1>
                        <h3>
                            <ReactTypingEffect
                                text={'FRONT-END DEVELOPER'}
                            />
                        </h3>
                    </div>
                    <Tilt options={defaultOptions}>
                        <div className={style.photo} style={photo}></div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

export default Main;