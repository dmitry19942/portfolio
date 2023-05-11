import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/todolist.jpg'
import counterImage from './../assets/image/counter.jpg'
import socialNetworkImage from './../assets/image/socialNetwork.png'
import reactTasksImage from './../assets/image/reactTasks.jpg'
import futureProjectImage1 from './../assets/image/futureProject.jpg'
import futureProjectImage2 from './../assets/image/futureProject2.webp'
import {v1} from "uuid";
import Fade from 'react-reveal/Fade';


function Projects() {

    const projects = [
        {id: v1(), style: {backgroundImage: `url(${todoImage}`}, title: 'ToDoList', description: 'is a list of errands and other tasks – often written on a piece of paper as a memory aid – that one needs or intends to accomplish.', onClick: 'https://dmitry19942.github.io/todolist/'},
        {id: v1(), style: {backgroundImage: `url(${socialNetworkImage}`}, title: 'Social Network', description: 'is a dedicated website or other application which enables users to communicate with each other by posting information, comments, messages, images, etc.', onClick: 'https://dmitry19942.github.io/social-network/'},
        {id: v1(), style: {backgroundImage: `url(${reactTasksImage}`}, title: 'React Tasks', description: 'developing the latest user-facing features using React.', onClick: 'https://dmitry19942.github.io/react-tasks/#/pre-junior'},
        {id: v1(), style: {backgroundImage: `url(${counterImage}`}, title: 'Counter', description: 'is a mechanical or electronic device which keeps a count of something and displays the total.', onClick: 'https://dmitry19942.github.io/counter/'},
        {id: v1(), style: {backgroundImage: `url(${futureProjectImage1}`}, title: 'Future Project', description: '... in progress', onClick: 'https://github.com/dmitry19942'},
        {id: v1(), style: {backgroundImage: `url(${futureProjectImage2}`}, title: 'Future Project', description: '... in progress', onClick: 'https://github.com/dmitry19942'},
    ]

    return (
        <div id='projects' className={style.projectsBlock}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title text={'My Projects'}/>
                    <div className={style.projects}>
                        {projects.map(p => <Project key={p.id} style={p.style} title={p.title} description={p.description} onClick={p.onClick} />)}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;