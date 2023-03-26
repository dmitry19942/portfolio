import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/todolist.jpg'
import counterImage from './../assets/image/counter.jpg'


function Projects() {

    const todolist = {
        backgroundImage: `url(${todoImage}`,
    };
    const counter = {
        backgroundImage: `url(${counterImage}`,
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My Projects'}/>
                <div className={style.projects}>
                    <Project style={todolist} title={'ToDoList'} description={'a list of errands and other tasks – often written on a piece of paper as a memory aid – that one needs or intends to accomplish.'} onClick={"https://dmitry19942.github.io/todolist/"}/>
                    <Project style={counter} title={'Counter'} description={'is a mechanical or electronic device which keeps a count of something and displays the total.'} onClick={'https://dmitry19942.github.io/counter/'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;