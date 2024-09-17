import style from '../HeaderBox/HeaderBox.module.scss'
import { Circle } from '../../Circle/Circle'

export function HeaderBox({headerText, headerContext}) {
    return(
        <div className={style.box}>
            <h1>{headerText}</h1>
            <h2>{headerContext}</h2>
            <Circle direction={'topLeft'}/>
            <Circle direction={'topRight'}/>
            <Circle direction={'bottomLeft'}/>
            <Circle direction={'bottomRight'}/>
        </div>
    )
}