import style from '../Timeline/Timeline.module.scss'

export function AboutContent({theme, action}) {
    return (
        <>
            <div className={theme ? style.splitterDark : style.splitter}></div>
            <img onClick={action} src="../src/assets/Light.svg" alt="light" />
        </>
    )
}