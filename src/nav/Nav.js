import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="" style={{textDecoration: "none"}}>Home</a>
            <a href="" style={{textDecoration: "none"}}>Skills</a>
            <a href="" style={{textDecoration: "none"}}>Projects</a>
            <a href="" style={{textDecoration: "none"}}>Contacts</a>
        </div>
    );
}

export default Nav;