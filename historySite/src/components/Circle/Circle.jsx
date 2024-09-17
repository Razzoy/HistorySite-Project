
import style from './Circle.module.scss'
export function Circle({direction}) {
    return(
        <div className={`${style.circle} ${style[direction]}`}>
        </div>
    )
}