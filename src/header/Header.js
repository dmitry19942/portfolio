import style from './Header.module.scss';
import Nav from "../nav/Nav";
import {useState} from "react";

function Header() {

    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }

    return (
        <div className={style.header}>
            {menu && <div className={style.background} onClick={closeMenu}/>}
            <div className={style.navigation}>
                <Nav menu={menu} openMenu={openMenu} closeMenu={closeMenu}/>
            </div>
        </div>
    );
}

export default Header;