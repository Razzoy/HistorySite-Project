import style from '../NavBar/NavBar.module.scss'
import { Circle } from '../Circle/Circle'

export function HeaderBox({headerText, headerContext, theme}) {
    return(
        <div className={theme ? style.darkBox : style.box}>
            <h1>{headerText}</h1>
            <h2>{headerContext}</h2>
            <Circle direction={'topLeft'}/>
            <Circle direction={'topRight'}/>
            <Circle direction={'bottomLeft'}/>
            <Circle direction={'bottomRight'}/>
        </div>
    )
}