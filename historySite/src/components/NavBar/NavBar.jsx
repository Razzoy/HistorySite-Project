import style from '../Navbar/Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { HeaderBox } from '../HeaderBox/HeaderBox';



export function Navbar({ headerText, headerContext, theme, dateSetter, setDay, setMonth}) {
    return (
        <>
            <HeaderBox setMonth={setMonth} setDay={setDay} headerContext={headerContext} headerText={headerText} theme={theme} dateSetter={dateSetter} />

            <nav className={theme ? style.darkNav : style.navbarStyle}>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? `${style.activeNav}` : style.inactive} to={'/byDate'}>BY DATE</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? `${style.activeNav}` : style.inactive} to={'/'}>TODAY</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? `${style.activeNav}` : style.inactive} to={'/about'}>ABOUT</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}