import style from '../Header/Header.module.scss'

export function Header({theme}) {
    
    return (
        <header>
            <img src="./src/assets/history-header.png" alt="history image" />
            <div className={theme ? `${style.triangleLeft} ${style.darkTriangles}` : `${style.triangleLeft} ${style.triangles}`}></div>
            <div className={theme ? `${style.triangleRight} ${style.darkTriangles}` : `${style.triangleRight} ${style.triangles}`}></div>
        </header>
    )
}