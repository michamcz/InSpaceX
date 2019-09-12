import { useState, useEffect } from 'react'

const useLeftTime = (launch_date) => {
  [leftSeconds, setleftSeconds] = useState(0);
  const launchDate = new Date(launch_date);

  useEffect(() => {
    setleftSeconds((Math.abs(launchDate - Date.now())) / 1000)
    const timer = setInterval(() => {
      setleftSeconds((Math.abs(launchDate - Date.now())) / 1000)
    }, 60000)
    return () => {
      clearInterval(timer);
    };
  }, []);
  let sec = leftSeconds;
  let days = Math.floor(sec / 86400);
  sec -= days * 86400;
  let hours = Math.floor(sec / 3600) % 24;
  sec -= hours * 3600;
  let minutes = Math.floor(sec / 60) % 60;
  return ({
    days,
    hours,
    minutes,
  })
}

export default useLeftTime;