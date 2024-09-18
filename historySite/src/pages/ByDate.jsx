import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"

export function ByDate() {
    return (
        <>
            <Header/>
            <Navbar headerText={'ON: "Date here"'} headerContext={'What happened on this day - Here you can enter a specific date to get only events that happened on this date'}/>
        </>
    )
}