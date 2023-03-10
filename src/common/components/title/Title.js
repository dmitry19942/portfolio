import style from './Title.module.scss';


function Title(props) {

    return (
        <div>
            <h2 className={style.title}>{props.text}</h2>
        </div>
    );
}

export default Title;