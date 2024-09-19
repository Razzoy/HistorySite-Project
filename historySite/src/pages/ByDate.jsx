import { useState } from "react"
import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { Timeline } from "../components/Timeline/Timeline"
import { useQuery } from '@tanstack/react-query'
import style from '../App.module.scss'


export function ByDate({ action, theme }) {

  const [month, setMonth] = useState('11');
  const [day, setDay] = useState('9');

  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}}`;

  const today = new Date();
  const thisDate = String(today.getDate()).padStart(2, "0");
  const thisMonth = String(today.getMonth() + 1).padStart(2, "0");


  const { isPending, error, data } = useQuery({
    queryKey: ['historyByDate'],
    queryFn: () =>
      fetch(url).then(res => res.json()),
    staleTime: 1000 * 600,
  })

  console.log(data);


  if (isPending) {
    return (
      <div className={style.message}>Loading.....</div>
    )
  }

  if (error) {
    return (
      <div className={style.message}>ERROR !!!</div>
    )
  }



  return (
    <>
      <Header theme={theme} />
      <Navbar theme={theme} headerText={`ON: ${month}/${day}`} headerContext={'What happened on this day - Here you can enter a specific date to get only events that happened on this date'} />
      <Timeline data={data} theme={theme} action={action} />
    </>
  )
}