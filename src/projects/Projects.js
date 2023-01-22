import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";


function Projects() {

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'ToDoList'} description={'a list of errands and other tasks – often written on a piece of paper as a memory aid – that one needs or intends to accomplish.'} onClick={"https://dmitry19942.github.io/todolist/"}/>
                    <Project title={'Counter'} description={'is a mechanical or electronic device which keeps a count of something and displays the total.'} onClick={'https://dmitry19942.github.io/counter/'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;