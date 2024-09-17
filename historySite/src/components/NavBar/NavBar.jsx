import style from '../Navbar/Navbar.module.scss'
import { NavLink } from "react-router-dom";



export function Navbar() {
    return (
        <>
        <nav className={style.navbarStyle}>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/byDate'}>BY DATE</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline'} : { textDecoration: 'none' }} to={'/'}>TODAY</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/since'}>SINCE</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}