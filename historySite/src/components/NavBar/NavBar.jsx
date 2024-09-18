import style from '../Navbar/Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { HeaderBox } from '../HeaderBox/HeaderBox';



export function Navbar({ headerText, headerContext }) {
    return (
        <>
            <HeaderBox headerContext={headerContext} headerText={headerText} className={style.box} />

            <nav className={style.navbarStyle}>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline', marginTop: '-5px' } : { textDecoration: 'none' }} to={'/byDate'}>BY DATE</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline', marginTop: '-5px' } : { textDecoration: 'none' }} to={'/'}>TODAY</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline', marginTop: '-5px' } : { textDecoration: 'none' }} to={'/since'}>SINCE</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}