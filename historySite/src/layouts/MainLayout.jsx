import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/NavBar/NavBar";
import style from './MainLayout.module.scss'



export function MainLayout() {
    return (
        <div className={style.bodyContainer}>
            <main>
                <Outlet />
            </main>
        </div>
    )
}