import style from './Timeline.module.scss'

export function Timeline({ action, theme, data }) {
    return (

        <>
            <div className={theme ? style.splitterDark : style.splitter}></div>

            <main className={theme ? style.darkTimelines : style.timelineStyling}>
                <div className={style.timeLine}></div>
                <img onClick={action} src="../src/assets/Light.svg" alt="light" />
                    {data?.events ? (
                        <div className={style.timelineContainer}>
                            {data.events.map((event, index) => (
                                <article className={style.timeBox} key={index}>
                                    <h3>YEAR: {event.year}</h3>
                                    <p>{event.text}</p>
                                    <footer>
                                        <img src="../src/assets/Bookmark.svg" alt="" />
                                        <a href={event.pages[0].content_urls.desktop.page}>Read More:</a>
                                    </footer>
                                </article>
                            ))}
                        </div>
                    ) : null}
            </main>
        </>
    )
}