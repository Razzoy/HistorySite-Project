import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { Timeline } from "../components/Timeline/Timeline"

export function ByDate({action, theme}) {
  

    return (
        <>
            <Header theme={theme}/>
            <Navbar theme={theme} headerText={'ON: "Date here"'} headerContext={'What happened on this day - Here you can enter a specific date to get only events that happened on this date'}/>
            <Timeline theme={theme} action={action}/>
        </>
    )
}