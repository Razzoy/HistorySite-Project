import style from '../Header/Header.module.scss'

export function Header() {
    return (
        <header>
            <img src="./src/assets/history-header.png" alt="history image" />
            <div className={`${style.triangleLeft} ${style.triangles}`}></div>
            <div className={`${style.triangleRight} ${style.triangles}`}></div>
        </header>
    )
}