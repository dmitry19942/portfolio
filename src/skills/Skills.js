import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsIcon from "../assets/icon/js.png";
import cssIcon from "../assets/icon/sccIcon.webp";
import reactIcon from "../assets/icon/react.png";

function Skills() {

    const js = {
        backgroundImage: `url(${jsIcon}`,
    };

    const css = {
        backgroundImage: `url(${cssIcon}`,
    };

    const react = {
        backgroundImage: `url(${reactIcon}`,
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My Skills'} />
                <div className={style.skills}>
                    <Skill style={js} title={'JS'} description={' is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'}/>
                    <Skill style={css} title={'CSS'} description={' is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.'}/>
                    <Skill style={react} title={'REACT'} description={'is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;