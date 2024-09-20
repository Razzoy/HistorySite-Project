import { useEffect, useState } from "react"
import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { Timeline } from "../components/Timeline/Timeline"
import { useQuery } from '@tanstack/react-query'
import style from '../App.module.scss'
import { useDebounce } from '../hooks/useDebounce'


export function ByDate({ action, theme }) {

  const currentDate = new Date;
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [day, setDay] = useState(currentDate.getDay());

  const debounceMonth = useDebounce(month, 1000);
  const debounceDay = useDebounce(day, 1000);

  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${debounceMonth}/${debounceDay}}`;


  const { isPending, error, data } = useQuery({
    queryKey: ['historyByDate', url],
    queryFn: () =>
      fetch(url).then(res => res.json()),
    staleTime: 1000 * 600,
  })

  console.log(data);


  // if (isPending) {
  //   return (
  //     <div className={style.message}>Loading.....</div>
  //   )
  // }

  if (error) {
    return (
      <div className={style.message}>ERROR !!!</div>
    )
  }


  return (
    <>
      <Header theme={theme} />
      <Navbar theme={theme} setMonth={setMonth} setDay={setDay} headerText={`ON:`} headerContext={'What happened on this day - Here you can enter a specific date to get only events that happened on this date'} dateSetter={true}/>
      <Timeline data={data} theme={theme} action={action} />
    </>
  )
}