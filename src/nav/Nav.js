import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.a} href={"#main"}>Home</a>
            <a className={style.a} href={"#skills"}>Skills</a>
            <a className={style.a} href={"#projects"}>Projects</a>
            <a className={style.a} href={"#contacts"}>Contacts</a>
        </div>
    );
}

export default Nav;