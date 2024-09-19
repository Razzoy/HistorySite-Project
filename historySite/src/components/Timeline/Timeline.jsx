import { Circle } from '../Circle/Circle';
import style from './Timeline.module.scss'
import { useEffect, useState } from 'react'

export function Timeline({ action, theme, data }) {

    const [visibleEvents, setVisibleEvents] = useState(10);
    const [isFetching, setIsFetching] = useState(false);
    const [hasMoreEvents, sethasMoreEvents] = useState(true);

    const showMore = () => {
        // Juster scroll positionen lidt, så brugeren ikke forbliver fast i bunden
        const currentScrollPosition = window.scrollY;

        if (data?.events.length > visibleEvents){
            setVisibleEvents((prev) => prev + 10);
        } else{
            sethasMoreEvents(false);
        }

        // Vent til nye events er blevet renderet, og juster derefter scroll positionen
        setTimeout(() => {
            window.scrollTo(0, currentScrollPosition); // Flyt op
            setIsFetching(false); // Tillad fetching igen
        }, 100); // Timeout for at sikre at DOM'en er opdateret
    };

    useEffect(() => {
        const scroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 0 && !isFetching && hasMoreEvents// Kun fetch hvis man ikke allerede fetcher
            ) {
                setIsFetching(true); // undgå flere fetches i træk
                showMore();
            }
        };

        if(hasMoreEvents){
            window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll)
        }
        };


    }, [isFetching, hasMoreEvents, visibleEvents]);

    return (

        <>
            <div className={theme ? style.splitterDark : style.splitter}></div>

            <main className={theme ? style.darkStyling : style.timelineStyling}>

                <div className={theme ? style.darkLine : style.timeLine}>
                    <Circle />
                    {hasMoreEvents && <h2>Scroll down for more</h2>}
                </div>

                <img onClick={action} src="../src/assets/Light.svg" alt="light" />

                {data?.events ? (
                    <div className={style.timelineContainer}>
                        {data.events.slice(0, visibleEvents).map((event, index) => (
                            <article className={theme ? style.darkTime : style.timeBox} key={index}>
                                <header>
                                    <Circle />
                                    <h3>YEAR: {event.year}</h3>
                                </header>
                                <p>{event.text}</p>
                                <footer>
                                    <img src="../src/assets/Bookmark.svg" alt="" />
                                    <a href={event.pages[0].content_urls.desktop.page}>Read More:</a>
                                </footer>
                            </article>
                        ))}
                    </div>
                ) : null}
                <img src='../src/assets/Upward Arrow.svg' className={theme? style.backToDark : style.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                </img>
            </main>
        </>
    )
}