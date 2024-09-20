import style from '../NavBar/NavBar.module.scss'
import { Circle } from '../Circle/Circle'

export function HeaderBox({ headerText, headerContext, theme, dateSetter, setDay, setMonth}) {
    return (
        <div className={theme ? style.darkBox : style.box}>
            <div className={theme ? style.dateDark : style.dateBox}>
                <h1>{headerText}</h1>
                {dateSetter && (
                    <div className={theme ? style.formDark : style.formBox}>
                        <input type="number" placeholder='M' onChange={(event)=> {setMonth(String(event.target.value).padStart(2, '0'))}}/>
                        <p>/</p>
                        <input type="number" placeholder='D' onChange={(event)=> {setDay(String(event.target.value).padStart(2, '0'))}} />
                    </div>
                )}
            </div>
            <h2>{headerContext}</h2>
            <Circle direction={'topLeft'} />
            <Circle direction={'topRight'} />
            <Circle direction={'bottomLeft'} />
            <Circle direction={'bottomRight'} />
        </div>
    )
}