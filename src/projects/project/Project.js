import style from './Project.module.css';


function Project(props) {

    const openInNewTab = url => {
        window.open(url);
    };

    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a onClick={() => openInNewTab(props.onClick)} className={style.button}>
                    View
                </a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.projectSpan}>{props.description}</span>
            </div>

        </div>
    );
}

export default Project;