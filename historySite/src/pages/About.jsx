import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { Timeline } from "../components/Timeline/Timeline"


export function About({theme, action}) {
    return (
        <>
            <Header theme={theme} />
            <Navbar theme={theme} headerText={'ABOUT'} headerContext={'What happened on this day - Here you can enter a specific year to get only events for that year'} />
            <Timeline theme={theme} action={action}/>
        </>
    )
}