import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsIcon from "../assets/icon/js.png";
import htmlCssIcon from "../assets/icon/htmlcss.png";
import reactIcon from "../assets/icon/react.png";
import typescriptIcon from "../assets/icon/Typescript_logo.png";
import reduxIcon from "../assets/icon/Redux.png";
import axiosIcon from "../assets/icon/Axios.png";
import restAPIIcon from "../assets/icon/RestAPI.png";
import unitTestIcon from "../assets/icon/UnitTest.png";
import storybookIcon from "../assets/icon/storybook.png";
import materialUIIcon from "../assets/icon/mui.png";
import antDesignIcon from "../assets/icon/AntDesign.png";
import gitIcon from "../assets/icon/git.png";
import {v1} from "uuid";
import Fade from 'react-reveal/Fade';


function Skills() {

    const skills = [
        {id: v1(), style: {backgroundImage: `url(${jsIcon}`}, title: 'JS', description: 'is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'},
        {id: v1(), style: {backgroundImage: `url(${htmlCssIcon}`}, title: 'HTML5&CSS3', description: 'HTML describes the structure of the pages, primarily in regards to tables, text, headings, and images or graphics. It’s the standard programming language for the overall appearance of web pages. CSS, on the other hand, is the language used for describing the presentation of each page, and primarily in regards to the layout, fonts, and colors.'},
        {id: v1(), style: {backgroundImage: `url(${reactIcon}`}, title: 'REACT', description: 'is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'},
        {id: v1(), style: {backgroundImage: `url(${reduxIcon}`}, title: 'REDUX', description: 'is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.'},
        {id: v1(), style: {backgroundImage: `url(${typescriptIcon}`}, title: 'TYPESCRIPT', description: 'is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.'},
        {id: v1(), style: {backgroundImage: `url(${axiosIcon}`}, title: 'AXIOS', description: 'is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6.'},
        {id: v1(), style: {backgroundImage: `url(${restAPIIcon}`}, title: 'REST API', description: 'is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.'},
        {id: v1(), style: {backgroundImage: `url(${unitTestIcon}`}, title: 'UNIT TESTS', description: 'is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.'},
        {id: v1(), style: {backgroundImage: `url(${storybookIcon}`}, title: 'STORYBOOK', description: 'is a development environment for UI components that enables you to create and showcase components in an environment outside your main application.'},
        {id: v1(), style: {backgroundImage: `url(${materialUIIcon}`}, title: 'MATERIAL UI', description: `is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.`},
        {id: v1(), style: {backgroundImage: `url(${antDesignIcon}`}, title: 'ANT DESIGN', description: 'is a React UI library that has a plethora of easy-to-use components that are useful for building elegant user interfaces.'},
        {id: v1(), style: {backgroundImage: `url(${gitIcon}`}, title: 'GIT', description: 'is a free and open source distributed code management and Version control system that is distributed under the GNU General Public License version 2. In addition to software version control, Git is used for other applications including configuration management and content management.'},
    ]

    return (
        <div id='skills' className={style.skillsBlock}>
            <Fade left>
                <div className={style.skillsContainer}>
                    <Title text={'My Skills'} />
                    <div className={style.skills}>
                        {skills.map(s => <Skill key={s.id} style={s.style} title={s.title} description={s.description} /> )}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;