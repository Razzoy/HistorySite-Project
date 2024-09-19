import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { AboutContent } from "../components/AboutContent/AboutContent"


export function About({theme, action}) {
    return (
        <>
            <Header theme={theme} />
            <Navbar theme={theme} headerText={'ABOUT'} headerContext={'Here you can read about this page'} />
            <AboutContent theme={theme} action={action}/>
        </>
    )
}