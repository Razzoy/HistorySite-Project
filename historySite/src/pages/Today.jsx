import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { Timeline } from "../components/Timeline/Timeline"
import { useQuery, useQueryClient } from '@tanstack/react-query'

export function Today({theme, action}) {

    // const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/09/18`;


  
    
    const {isPending, error, data} = useQuery({
      queryKey: ['historyByDate'],
      queryFn: () =>
        fetch(url).then (res => res.json()),
      staleTime: 1000 * 600,
    })

    console.log(data);
    
  
    if(isPending){
      return(
        <div>Loading.....</div>
      )
    }
  
    if(error){
      return(
        <div>ERROR !!!</div>
      )
    }

    return (
        <>
            <Header theme={theme} />
            <Navbar theme={theme} headerText={'ON THIS DAY'} headerContext={'What happened on this day - historical events, deaths and births thoughout time'}/>
            <Timeline data={data} theme={theme} action={action}/>

        </>
    )
}