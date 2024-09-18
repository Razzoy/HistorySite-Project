import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"

export function Today() {
    return (
        <>
            <Header />
            <Navbar headerText={'ON THIS DAY'} headerContext={'What happened on this day - historical events, deaths and births thoughout time'}/>
        </>
    )
}