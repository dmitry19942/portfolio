import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/todolist.jpg'
import counterImage from './../assets/image/counter.jpg'
import socialNetworkImage from './../assets/image/socialNetwork.png'
import reactTasksImage from './../assets/image/reactTasks.jpg'


function Projects() {

    const todolist = {
        backgroundImage: `url(${todoImage}`,
    };
    const counter = {
        backgroundImage: `url(${counterImage}`,
    };
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage}`,
    };
    const reactTasks = {
        backgroundImage: `url(${reactTasksImage}`,
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My Projects'}/>
                <div className={style.projects}>
                    <Project style={todolist} title={'ToDoList'} description={'a list of errands and other tasks – often written on a piece of paper as a memory aid – that one needs or intends to accomplish.'} onClick={"https://dmitry19942.github.io/todolist/"}/>
                    <Project style={counter} title={'Counter'} description={'is a mechanical or electronic device which keeps a count of something and displays the total.'} onClick={'https://dmitry19942.github.io/counter/'}/>
                    <Project style={socialNetwork} title={'Social Network'} description={'a dedicated website or other application which enables users to communicate with each other by posting information, comments, messages, images, etc.'} onClick={'https://dmitry19942.github.io/social-network/'}/>
                    <Project style={reactTasks} title={'React Tasks'} description={'developing the latest user-facing features using React.'} onClick={'https://dmitry19942.github.io/simple-react-homeworks-master/#/pre-junior'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;