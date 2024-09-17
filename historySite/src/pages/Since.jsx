import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"

export function Since() {
    return (
        <>
            <Header headerText={'SINCE: "Year"'} headerContext={'What happened on this day - Here you can enter a specific year to get only events for that year'} />
            <Navbar />
        </>
    )
}