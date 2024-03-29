import style from './Nav.module.scss';
import {useEffect} from "react";
import { Link } from "react-scroll";


function Nav(props) {

    useEffect(() => {
        props.menu && (document.body.style.overflow = 'hidden')
        !props.menu && (document.body.style.overflow = 'unset')
    }, [props.menu])

    return (
        <div className={style.nav}>
                <a className={style.a}>
                    <Link activeClass={style.active}
                          to={'main'}
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                    >Main</Link>
                </a>
                <a className={style.a}>
                    <Link activeClass={style.active}
                          to={'skills'}
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                    >Skills</Link>
                </a>
                <a className={style.a}>
                    <Link activeClass={style.active}
                      to={'projects'}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >Projects</Link>
                </a>
                <a className={style.a}>
                    <Link activeClass={style.active}
                      to={'contacts'}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >Contacts</Link>
                </a>
            <div className={style.menu}>
                <div className={style.burgerBtn}>
                    <svg className={style.svg} onClick={props.openMenu} aria-hidden='true' focusable='false' data-prefix='fas' data-icon='bars'
                         role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                        <path fill="currentColor"
                              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </div>
                <div className={props.menu ? style.menuActive : style.menuMenu}>
                    <div className={style.menuContent}>
                        <div className={style.menuClose}>
                            <svg className={style.svgMenu} onClick={props.closeMenu} aria-hidden='true' focusable='false' data-prefix='fas'
                                 data-icon='times-circle' role='img' xmlns='http://www.w3.org/2000/svg'
                                 viewBox='0 0 512 512'>
                                <path fill="currentColor"
                                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                            </svg>
                        </div>
                        <div className={style.menuHeader}>
                            menu
                        </div>
                        <div className={style.menuItems}>
                            <div className={style.menuOneItem}>
                                <a href={"#main"} className={style.menuLink}>MAIN</a>
                                <a href={"#skills"} className={style.menuLink}>SKILLS</a>
                                <a href={"#projects"} className={style.menuLink}>PROJECTS</a>
                                <a href={"#contacts"} className={style.menuLink}>CONTACTS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;