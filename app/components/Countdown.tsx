'use client'
import React, { useEffect, useState } from 'react'

export default function Countdown() {
  const [time, setTime] = useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
  })  

  useEffect(() => {
    
    const calculatetimeLeft = () => {

        const timeNow = new Date();
        const year = timeNow.getFullYear();
        const laborDay = new Date(`September 1, ${year} 00:00:00`)
        
        const diff = laborDay.getTime() - timeNow.getTime();
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours  = Math.floor((diff / ((1000 * 60 * 60)) % 24));
        const minutes = Math.floor((diff / (1000 * 60)) %60);
        const seconds = Math.floor((diff / (1000))% 60);

        if (diff > 0){
            setTime({ days:days, hours:hours, minutes:minutes, seconds:seconds });
        }else{
            setTime({ days:0, minutes:0, hours:0, seconds:0 });
        }
    }
    //run the function immediately
    calculatetimeLeft();
    //time function refreshed by setInterval
    let timer = setInterval(calculatetimeLeft, 1000);

    //return function and clearing timer to prevent memory leaks
    return() => clearInterval(timer);
  }, []);//dependancy array, what it should listen to run the code


  return (
    <div className="flex gap-5">
        <div>
            <span className="countdown font-mono text-4xl">
                <span style={{"--value":time.days} as React.CSSProperties } aria-live="polite">{time.days}</span>
            </span>
            days
        </div>
        <div>
            <span className="countdown font-mono text-4xl">
                <span style={{"--value":time.hours} as React.CSSProperties } aria-live="polite">{time.hours}</span>
            </span>
            hours
        </div>
        <div>
            <span className="countdown font-mono text-4xl">
            <span style={{"--value":time.minutes} as React.CSSProperties } aria-live="polite">{time.minutes}</span>
            </span>
            min
        </div>
        <div>
            <span className="countdown font-mono text-4xl">
            <span style={{"--value":time.seconds} as React.CSSProperties} aria-live="polite">{time.seconds}</span>
            </span>
            sec
        </div>
    </div>
  )
}
