import { Header } from "../components/Header/Header"
import { Navbar } from "../components/NavBar/NavBar"
import { Timeline } from "../components/Timeline/Timeline"
import { useQuery, useQueryClient } from '@tanstack/react-query'
import style from '../App.module.scss'
import { useEffect } from "react"

const getCurrentDate = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return { month, day };
};

export function Today({ theme, action }) {
  const { month, day } = getCurrentDate();
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;

  const { isPending, error, data } = useQuery({
    queryKey: ['historyByDate', month, day],
    queryFn: () =>
      fetch(url).then(res => res.json()),
    staleTime: 1000 * 600,
  });

  console.log(data);

  if (isPending) {
    return (
      <div className={style.message}>Loading.....</div>
    );
  }

  if (error) {
    return (
      <div className={style.message}>ERROR !!!</div>
    );
  }

  

  return (
    <>
      <Header theme={theme} />
      <Navbar theme={theme} headerText={'ON THIS DAY'} headerContext={'What happened on this day - historical events, deaths and births throughout time'} />
      <Timeline data={data} theme={theme} action={action} />
    </>
  );
}