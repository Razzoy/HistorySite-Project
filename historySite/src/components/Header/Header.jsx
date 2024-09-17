import style from '../Header/Header.module.scss'
import { HeaderBox } from './HeaderBox/HeaderBox'

export function Header({headerText, headerContext}) {
    return (
        <header>
            <img src="./src/assets/history-header.png" alt="history image" />
            <HeaderBox headerContext={headerContext} headerText={headerText} className={style.box}/>
        </header>
    )
}